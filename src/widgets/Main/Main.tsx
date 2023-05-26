import { FC } from 'react'
import classes from './Main.module.scss'

type MainProps = {
	mainTitleFirstPhrase: string
	mainTitleSecondPhrase: string
	mainTitleThirdPhrase: string
	mainTitleFourthPhrase: string
	mainDescription: string
}

const Main: FC<MainProps> = props => {
	const {
		mainTitleFirstPhrase,
		mainTitleSecondPhrase,
		mainTitleThirdPhrase,
		mainTitleFourthPhrase,
		mainDescription,
	} = props
	return (
		<div className={classes.main}>
			<div className={classes.mainWrapper}>
				<div className={classes.mainTitle}>
					<div className={classes.mainTitleText}>
						<h1>{mainTitleFirstPhrase}</h1>
					</div>
					<div className={classes.mainTitleText}>
						<div className={classes.mainTitleTextCenter}>
							<div className={classes.line}></div>
							<h1>{mainTitleSecondPhrase}</h1>
						</div>
					</div>
					<div className={classes.mainTitleText}>
						<h1>
							{mainTitleThirdPhrase}{' '}
							<span className={classes.greenText}>{mainTitleFourthPhrase}</span>
						</h1>
					</div>
					<p>{mainDescription}</p>
				</div>
				<div className={classes.mainImg}>Lorem ipsum dolor sit amet.</div>
			</div>
		</div>
	)
}

export default Main
