import { FC, useState } from 'react'
import Service from '../../components/Service/Service'
import classes from './Menu.module.scss'

type MenuProps = {
	serviceCounter: string
	serviceName: string
}
const Menu: FC<MenuProps> = props => {
	const { serviceCounter, serviceName } = props
	const [show, setShow] = useState(false)
	return (
		<div className={classes.menu}>
			<button className={classes.btn} onClick={() => setShow(prev => !prev)}>
				<img
					className={classes.burger}
					src='https://assets-global.website-files.com/62a059f7c3b9147ea6a4afb2/62b48192cd21026a38aba88a_burger.svg'
					alt='menu'
				/>
			</button>
			{show && (
				<div className={classes.menuWrapper}>
					<Service serviceCounter={serviceCounter} serviceName={serviceName} />
				</div>
			)}
		</div>
	)
}

export default Menu
