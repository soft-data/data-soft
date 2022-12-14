import React from 'react'
import CounterUp from 'react-countup'

interface Props {
	end: `${number}` | number
	starting: boolean
	className: string
}

const Counter = (props: Props) => {
	return (
		<CounterUp
			start={0}
			end={+props.end}
			useEasing
			delay={2}
		>
			{({ start, countUpRef }) => {
				props.starting && start()
				return (
					<span
						className={props.className}
						ref={countUpRef}
					/>
				)
			}}
		</CounterUp>
	)
}

export default Counter
