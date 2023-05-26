import { FC } from 'react'
import Schedule from '../../components/Schedule/Schedule'
import classes from './ScheduleCall.module.scss'
type ScheduleCallProps = {
	scheduleCallTitleFirstPhrase: string
	scheduleCallTitleSecondPhrase: string
	scheduleCallTitleThirdPhrase: string

	scheduleCallDescriptionFirstPhrase: string
	scheduleCallDescriptionSecondPhrase: string

	scheduleTitle: string
	scheduleHref: string
}
const ScheduleCall: FC<ScheduleCallProps> = props => {
	const {
		scheduleCallTitleFirstPhrase,
		scheduleCallTitleSecondPhrase,
		scheduleCallTitleThirdPhrase,

		scheduleCallDescriptionFirstPhrase,
		scheduleCallDescriptionSecondPhrase,

		scheduleTitle,
		scheduleHref,
	} = props

	return (
		<div className={classes.scheduleCall}>
			<div className={classes.scheduleCallWrapper}>
				<div className={classes.yourFutureText}>
					{scheduleCallTitleFirstPhrase}{' '}
					<span className={classes.greenText}>
						{scheduleCallTitleSecondPhrase}
					</span>
					<br />
					{scheduleCallTitleThirdPhrase}
				</div>
				<div className={classes.descriptionText}>
					{scheduleCallDescriptionFirstPhrase} <br />
					{scheduleCallDescriptionSecondPhrase}
				</div>
				<Schedule scheduleText={scheduleTitle} href={scheduleHref} />
			</div>
		</div>
	)
}
export default ScheduleCall
