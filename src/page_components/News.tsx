import React, { ReactElement } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import Image from "../assets/images/arclipse.jpg"
import "./style_sheets/news.scss"
import { useHistory, Route, Switch} from 'react-router';
import PatchImage from "../assets/images/patch1.jpg"
//Components
import Patch_renderer from "../components/Patch_renderer"

//Function that scroll Body to top
function scrollToTop() {
	window.scrollTo(0,0)
}

//Component That renders News_home if no Patch param is available in the url
export default function News_renderer(): ReactElement {
	scrollToTop()

	return(
		<AnimatePresence exitBeforeEnter onExitComplete={() => {console.log("test")}}>
			<Switch>
				<Route exact path='/news'>
					<News_home/>
				</Route>

				<Route exact path="/news/:patch">
					<Patch_renderer/>
				</Route>

			</Switch>
		</AnimatePresence>
	)
}

//Component that renders the Default screen to News Page
function News_home(): ReactElement {
	scrollToTop()
	return (
		<motion.div initial={{ opacity: 0}} animate={{opacity: 1, transition: {duration: 0.12}}} exit={{opacity: 0, transition: {duration: 0.12}}} className="news_container">

			<div className="news_header_container">
				<div className="background_container">
					<img src={Image} className="background_image" />
					<div className="background_blur"></div>
				</div>
				<div className="header_content_container">
					<h2>Recent Updates</h2>
					<h1>Everything New!</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lectus eu tincidunt faucibus. Vel venenatis eget euismod.</p>
					<span />
				</div>
			</div>

			<div className="news_content_container">
				<Patch_template date="06/10/2021" version="1" type="Application Launch" preview={PatchImage}/>
			</div>

		</motion.div>
	);
}

//Component to create a Patch template
function Patch_template(props: any): ReactElement{
	const history = useHistory()

	//Function
	function goToPatch(link: string) {
		if(history.location.pathname.includes(`${link}`) === false) {
			history.push(`${history.location.pathname.toLowerCase()}/patchnote_${props.version}`)
		}
	}
	return(
		
		<motion.div onClick={() => goToPatch(props.link)} className="patch_template_container">
			<img src={props.preview} alt="patchImage" className="patch_preview" />
			<div className="patch_information">
				<h2>{props.type}</h2>
				<h1>Patchnotes {props.version}</h1>
				<p>2 Weeks ago</p>
			</div>
		</motion.div>
		
	)
}
