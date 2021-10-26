import React, { ReactElement} from 'react';
import { motion } from "framer-motion"
import Image from "../assets/images/arclipse.jpg"
import { useHistory} from 'react-router';
//COMPONENTS
import Footer from '../components/Footer';
//IMAGES
import PatchImage from "../assets/images/patch1.jpg"
//SCSS
import "./style_sheets/news.scss"

//News Component
export default  function News(): ReactElement {
	
	return (
		<motion.div initial={{ opacity: 0}} animate={{opacity: 1, transition: {duration: 0.15}}} exit={{opacity: 0, transition: {duration: 0.15}}} className="news_container">

			<div className="news_header_container">
				<div className="background_container">
					<img src={Image} className="background_image" />
					<div className="background_blur"></div>
				</div>
				<div className="header_content_container">
					<h2>Recent Updates</h2>
					<h1>Everything New About PixelPalast</h1>
					<p>We will release occasional updates for PixelPalast. If you want to stay tuned you should come here and visit sometimes.</p>
					<span />
				</div>
			</div>

			<div className="news_content_container">
				<Patch_template date="14/10/2021" patch="1" name="Patchnote 1.0.0" type="Application Launch" preview={PatchImage}/>
			</div>

			<Footer/>
		</motion.div>
	);
}

//Component to create a Patch template
function Patch_template(props: any): ReactElement{
	const history = useHistory()

	//Function
	function goToPatch() {
		if(history.location.pathname.toLowerCase().includes(`/patchnote_${props.patch}`) === false) {
			history.push(`${history.location.pathname.toLowerCase()}/patchnote_${props.patch}`)
		}
	}
	return(
		
		<motion.div onClick={goToPatch} className="patch_template_container">
			<img src={props.preview} alt="patchImage" className="patch_preview" />
			<div className="patch_information">
				<h2>{props.type}</h2>
				<h1>{props.name}</h1>
				<p>2 Weeks ago</p>
			</div>
		</motion.div>
		
	)
}
