import Service from '../../components/Service/Service'
import classes from './Services.module.scss'
const Services = () => {
	return (
		<>
			<div className={classes.services}>
				<div className={classes.servicesWrapper}>
					<Service />
					<Service />
					<Service />
					<Service />
				</div>
			</div>
			<div className={classes.lineSeparator}></div>
		</>
	)
}
export default Services
