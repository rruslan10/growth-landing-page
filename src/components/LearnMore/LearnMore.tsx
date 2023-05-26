import { FC } from 'react'
import classes from './LearnMore.module.scss'

type LearnMoreProps = {
	learnMoreTitle: string
	href: string
}
const LearnMore: FC<LearnMoreProps> = props => {
	const { learnMoreTitle, href } = props
	return (
		<div className={classes.learnMore}>
			<a href={href}>{learnMoreTitle}</a>
		</div>
	)
}
export default LearnMore
