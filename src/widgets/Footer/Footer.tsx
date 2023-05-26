import { FC } from 'react'
import classes from './Footer.module.scss'
type FooterProps = {
	footerTitle: string

	footerSignUpFirstPhrase: string
	footerSignUpSecondPhrase: string

	footerPrivacy: string
}
const Footer: FC<FooterProps> = props => {
	const {
		footerTitle,
		footerSignUpFirstPhrase,
		footerSignUpSecondPhrase,
		footerPrivacy,
	} = props
	return (
		<div className={classes.footer}>
			<div className={classes.footerWrapper}>
				<div className={classes.footerTitle}>{footerTitle}</div>
				<div className={classes.footerNavbar}>
					<div className={classes.signUp}>
						{footerSignUpFirstPhrase} <br /> {footerSignUpSecondPhrase}
					</div>
					<div className={classes.privacyText}>{footerPrivacy}</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
