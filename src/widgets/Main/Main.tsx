import classes from './Main.module.scss'
const Main = () => {
	return (
		<div className={classes.main}>
			<div className={classes.mainWrapper}>
				<div className={classes.mainTitle}>
					<div className={classes.mainTitleText}>
						<h1>We bring</h1>
					</div>
					<div className={classes.mainTitleText}>
						<div className={classes.mainTitleTextCenter}>
							<div className={classes.line}></div>
							<h1>visionary</h1>
						</div>
					</div>
					<div className={classes.mainTitleText}>
						<h1>
							ideas to <span className={classes.greenText}>life.</span>
						</h1>
					</div>
					<p>
						A modern, one-stop decentralized agency focused on creating the
						future
					</p>
				</div>
				<div className={classes.mainImg}>Lorem ipsum dolor sit amet.</div>
			</div>
		</div>
	)
}

export default Main
