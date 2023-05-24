import classes from './Footer.module.scss'
const Footer = () => {
	return (
		<div className={classes.footer}>
			<div className={classes.footerWrapper}>
				<div className={classes.footerTitle}>Growth</div>
				<div className={classes.footerNavbar}>
					<div className={classes.signUp}>
						Sign up to <br /> our newsletter
					</div>
					<div className={classes.privacyText}>Privacy Policy</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
