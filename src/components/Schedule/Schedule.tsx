import { FC } from 'react'
import classes from './Schedule.module.scss'
type ScheduleProps = {
	scheduleText: string
	href: string
}
const Schedule: FC<ScheduleProps> = props => {
	const { scheduleText, href } = props
	return (
		<div className={classes.schedule}>
			<a href={href}>{scheduleText}</a>
		</div>
	)
}
export default Schedule
