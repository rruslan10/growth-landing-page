import Menu from '../Menu/Menu'
import classes from './Header.module.scss'
const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.headerWrapper}>
				<div className={classes.headerTitle}>Growth</div>

				<Menu />
			</div>
		</div>
	)
}

export default Header
