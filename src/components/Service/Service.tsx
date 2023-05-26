import { FC } from 'react'
import classes from './Service.module.scss'
type ServiceProps = {
	serviceCounter: string
	serviceName: string
}
const Service: FC<ServiceProps> = props => {
	const { serviceCounter, serviceName } = props
	return (
		<div className={classes.service}>
			<div className={classes.serviceWrapper}>
				<div className={classes.serviceCounter}>{serviceCounter}</div>
				<div className={classes.serviceName}>{serviceName}</div>
			</div>
		</div>
	)
}
export default Service
