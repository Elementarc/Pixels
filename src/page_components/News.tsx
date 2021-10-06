import React, { ReactElement } from 'react';
import {motion} from "framer-motion"
/*eslint-disable */
import Image from "../assets/images/arclipse.jpg"
import "./style_sheets/news.scss"
import { useHistory, useLocation, useParams, Route, Switch} from 'react-router';
import PatchImage from "../assets/images/patch1.jpg"


export default function News(): ReactElement {
	
	return(
		<Switch>
			<Route exact path='/news'>
				<News_welcome_screen/>
			</Route>

		</Switch>
	)
}

function News_welcome_screen(): ReactElement {

	return (
		<motion.div initial={{ opacity: 0}} animate={{opacity: 1, transition: {duration: 0.12}}} exit={{opacity: 0, transition: {duration: 0.12}}} className="news_container">
			<div className="news_nav_container">
				<span />
				<div className="news_nav_content_container" >
					<h1>News</h1>
				</div>
				<span />
			</div>

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
				<PatchTemplate date="06/10/2021" version="1.0" type="Application Launch" preview={PatchImage}/>
				<PatchTemplate date="06/10/2021" version="1.0" type="Application Launch" preview={PatchImage}/>
			</div>
		</motion.div>
	);
}
function PatchTemplate(props: any): ReactElement{
	const history = useHistory()

	//Function
	function goToPatch(link: string) {
		if(history.location.pathname.includes(`${link}`) === false) {
			history.push(`${history.location.pathname.toLowerCase()}/patch${props.version}`)
		}
	}
	return(
		
		<motion.div onClick={() => goToPatch(props.link)} className="patch_container">
			<img src={props.preview} alt="patchImage" className="patch_preview" />
			<div className="patch_information">
				<h2>{props.type}</h2>
				<h1>Patchnotes {props.version}</h1>
				<p>2 Weeks ago</p>
			</div>
		</motion.div>
		
	)
}
