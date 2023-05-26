import { FC } from 'react'
import Menu from '../Menu/Menu'
import classes from './Header.module.scss'

type HeaderProps = {
	headerTitle: string
	serviceCounter: string
	serviceName: string
}

const Header: FC<HeaderProps> = props => {
	const { headerTitle, serviceCounter, serviceName } = props
	return (
		<div className={classes.header}>
			<div className={classes.headerWrapper}>
				<div className={classes.headerTitle}>{headerTitle}</div>

				<Menu serviceCounter={serviceCounter} serviceName={serviceName} />
			</div>
		</div>
	)
}

export default Header
