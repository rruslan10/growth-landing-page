import About from './widgets/About/About'
import Footer from './widgets/Footer/Footer'
import Header from './widgets/Header/Header'
import Main from './widgets/Main/Main'
import Marquee from './widgets/Marquee/Marquee'
import ScheduleCall from './widgets/ScheduleCall/ScheduleCall'
import Services from './widgets/Services/Services'

function App() {
	//WidgetsProps:

	//Header
	const headerTitle = 'Growth'

	//Main
	const mainTitleFirstPhrase = 'We bring'
	const mainTitleSecondPhrase = 'visionary'
	const mainTitleThirdPhrase = 'ideas to'
	const mainTitleFourthPhrase = 'life.'

	const mainDescription =
		'A modern, one-stop decentralized agency focused on creating the future'

	//About
	const aboutDescription =
		"We are entrepreneurs, engineers, and designers solving hard problems for passionate creators. We believe humans are wired to create, and through genuine collaboration, we can build amazing things. We'd love to work with you, so take a look around, and reach out if you think we'd be a good fit."

	//ScheduleCall
	const scheduleCallTitleFirstPhrase = 'Your'
	const scheduleCallTitleSecondPhrase = 'future,'
	const scheduleCallTitleThirdPhrase = 'together.'

	const scheduleCallDescriptionFirstPhrase =
		"We'd love to help bring your next idea to life."
	const scheduleCallDescriptionSecondPhrase =
		'Schedule a time with our founders.'

	//Footer
	const footerTitle = 'Growth'

	const footerSignUpFirstPhrase = 'Sign up to'
	const footerSignUpSecondPhrase = 'our newsletter'

	const footerPrivacy = 'Privacy Policy'

	//ComponentsProps:

	//Service
	const serviceName = 'Solutions'
	const serviceCounter = '01'

	//Tablet
	const tabletDecorImg =
		'https://assets-global.website-files.com/62a059f7c3b9147ea6a4afb2/62aaeea5395fe18478b76910_point.svg'

	//LearnMore
	const learnMoreTitle = 'Learn More'
	const learnMoreHref = '/'

	//Schedule
	const scheduleTitle = 'Schedule a Call'
	const scheduleHref = '/'

	return (
		<>
			<Header
				serviceCounter={serviceCounter}
				serviceName={serviceName}
				headerTitle={headerTitle}
			/>
			<Main
				mainTitleFirstPhrase={mainTitleFirstPhrase}
				mainTitleSecondPhrase={mainTitleSecondPhrase}
				mainTitleThirdPhrase={mainTitleThirdPhrase}
				mainTitleFourthPhrase={mainTitleFourthPhrase}
				mainDescription={mainDescription}
			/>
			<Marquee />
			<About
				tabletDecorImg={tabletDecorImg}
				learnMoreHref={learnMoreHref}
				learnMoreTitle={learnMoreTitle}
				aboutDescription={aboutDescription}
			/>
			<Services serviceCounter={serviceCounter} serviceName={serviceName} />
			<About
				tabletDecorImg={tabletDecorImg}
				learnMoreHref={learnMoreHref}
				learnMoreTitle={learnMoreTitle}
				aboutDescription={aboutDescription}
			/>
			<ScheduleCall
				scheduleTitle={scheduleTitle}
				scheduleHref={scheduleHref}
				scheduleCallTitleFirstPhrase={scheduleCallTitleFirstPhrase}
				scheduleCallTitleSecondPhrase={scheduleCallTitleSecondPhrase}
				scheduleCallTitleThirdPhrase={scheduleCallTitleThirdPhrase}
				scheduleCallDescriptionFirstPhrase={scheduleCallDescriptionFirstPhrase}
				scheduleCallDescriptionSecondPhrase={
					scheduleCallDescriptionSecondPhrase
				}
			/>
			<Footer
				footerTitle={footerTitle}
				footerSignUpFirstPhrase={footerSignUpFirstPhrase}
				footerSignUpSecondPhrase={footerSignUpSecondPhrase}
				footerPrivacy={footerPrivacy}
			/>
		</>
	)
}

export default App
