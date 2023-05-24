import About from './widgets/About/About'
import Footer from './widgets/Footer/Footer'
import Header from './widgets/Header/Header'
import Main from './widgets/Main/Main'
import Marquee from './widgets/Marquee/Marquee'
import ScheduleCall from './widgets/ScheduleCall/ScheduleCall'
import Services from './widgets/Services/Services'

function App() {
	return (
		<>
			<Header />
			<Main />
			<Marquee />
			<About />
			<Services />
			<About />
			<ScheduleCall />
			<Footer />
		</>
	)
}

export default App
