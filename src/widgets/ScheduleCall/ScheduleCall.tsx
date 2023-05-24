import Schedule from '../../components/Schedule/Schedule'
import classes from './ScheduleCall.module.scss'
const ScheduleCall = () => {
	return (
		<div className={classes.scheduleCall}>
			<div className={classes.scheduleCallWrapper}>
				<div className={classes.yourFutureText}>
					Your{' '}
					<span className={classes.greenText}>
						future<span className={classes.comma}>&#8218;</span>
					</span>
					<br />
					together.
				</div>
				<div className={classes.descriptionText}>
					We'd love to help bring your next idea to life. <br />
					Schedule a time with our founders.
				</div>
				<Schedule />
			</div>
		</div>
	)
}
export default ScheduleCall
