import { FC } from 'react'
import LearnMore from '../../components/LearnMore/LearnMore'
import Tablet from '../../components/Tablet/Tablet'
import classes from './About.module.scss'

//props: title description url
// прокинуть пропсы.
// сделать так, чтобы все виджерты и компоненты принимали текст ввыше. А App .tsx прокинет все компоненты вниз.

type AboutProps = {
	learnMoreTitle: string
	aboutDescription: string

	learnMoreHref: string
	tabletDecorImg: string
}
const About: FC<AboutProps> = props => {
	const { learnMoreTitle, aboutDescription, learnMoreHref, tabletDecorImg } =
		props
	return (
		<div className={classes.about}>
			<div className={classes.aboutWrapper}>
				<div className={classes.aboutTitle}>
					<Tablet tabletDecorImg={tabletDecorImg} />
					<div className={classes.aboutText}>
						<p>{aboutDescription}</p>
						<LearnMore href={learnMoreHref} learnMoreTitle={learnMoreTitle} />
					</div>
				</div>
				<div className={classes.aboutImg}>Lorem ipsum dolor sit amet.</div>
			</div>
			<div className={classes.lineSeparator}></div>
		</div>
	)
}
export default About
