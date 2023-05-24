import LearnMore from '../../components/LearnMore/LearnMore'
import Tablet from '../../components/Tablet/Tablet'
import classes from './About.module.scss'
const About = () => {
	return (
		<div className={classes.about}>
			<div className={classes.aboutWrapper}>
				<div className={classes.aboutTitle}>
					<Tablet />
					<div className={classes.aboutText}>
						<p>
							We are entrepreneurs, engineers, and designers solving hard
							problems for passionate creators. We believe humans are wired to
							create, and through genuine collaboration, we can build amazing
							things. We'd love to work with you, so take a look around, and
							reach out if you think we'd be a good fit.
						</p>
						<LearnMore />
					</div>
				</div>
				<div className={classes.aboutImg}>Lorem ipsum dolor sit amet.</div>
			</div>
			<div className={classes.lineSeparator}></div>
		</div>
	)
}
export default About
