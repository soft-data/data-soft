import React from "react";

import { ArrowLeft, Menu } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  classes: {
    readonly [key: string]: string;
  };
  open: boolean;
  onToggle: () => void;
};

const NavbarToggler = ({ classes, onToggle, open }: Props) => {
  return (
    <div className={classes.toggler_wrapper}>
      <button onClick={onToggle} data-open={open} className={classes.navbar_toggler}>
        <motion.span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            lineHeight:0
          }}
          initial={false}
          animate={
            !open
              ? {
                  opacity: 1,
                  transform: 'translate(-50%, -50%) scale(1)'
                }
              : {
                  opacity: 0,
                  transform: 'translate(-50%, -50%) scale(0)'
                }
          }
        >
          <Menu strokeWidth={1}/>
        </motion.span>
        <motion.span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            lineHeight:0
          }}
          initial={false}
          animate={
            open
              ? {
                  opacity: 1,
                  transform: 'translate(-50%, -50%) scale(1)'
                }
              : {
                  opacity: 0,
                  transform: 'translate(-50%, -50%) scale(0)'
                }
          }
        >
          <ArrowLeft strokeWidth={1}/>
        </motion.span>
      </button>
    </div>
  );
};

export default NavbarToggler;
