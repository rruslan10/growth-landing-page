import classes from './Service.module.scss'
const Service = () => {
	return (
		<div className={classes.service}>
			<div className={classes.serviceWrapper}>
				<div className={classes.serviceCounter}>01</div>
				<div className={classes.serviceName}>Solutions</div>
			</div>
		</div>
	)
}
export default Service
