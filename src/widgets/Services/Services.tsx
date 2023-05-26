import { FC } from 'react'
import Service from '../../components/Service/Service'
import classes from './Services.module.scss'
type ServicesProps = {
	serviceCounter: string
	serviceName: string
}
const Services: FC<ServicesProps> = props => {
	const { serviceCounter, serviceName } = props
	return (
		<>
			<div className={classes.services}>
				<div className={classes.servicesWrapper}>
					<Service serviceCounter={serviceCounter} serviceName={serviceName} />
					<Service serviceCounter={serviceCounter} serviceName={serviceName} />
					<Service serviceCounter={serviceCounter} serviceName={serviceName} />
					<Service serviceCounter={serviceCounter} serviceName={serviceName} />
				</div>
			</div>
			<div className={classes.lineSeparator}></div>
		</>
	)
}
export default Services
