import { FC } from 'react'
import classes from './Tablet.module.scss'
type TabletProps = {
	tabletDecorImg: string
}
const Tablet: FC<TabletProps> = props => {
	const { tabletDecorImg } = props
	return (
		<div className={classes.tablet}>
			<img src={tabletDecorImg} alt='about' />
		</div>
	)
}
export default Tablet
