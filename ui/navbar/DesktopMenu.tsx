import { TargetAndTransition } from "framer-motion";
import Link from "next/link";
import React from "react";
import navList from "./navbarList";
import {motion} from 'framer-motion'

interface Props {
  classes: {
    readonly [key: string]: string;
  };
}

const itemvariant: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		y: 0,
		opacity: 1
	},
	hidden: {
		y: -20,
		opacity: 0
	}
}

const DesktopMenu = ({ classes }: Props) => {
  return (
    <div className={classes.desktop}>
      <ul>
        {navList.map((item, index) => {
          return (
            <motion.li variants={itemvariant} key={item.id}>
              <Link href={item.href}>{item.text}</Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopMenu;
