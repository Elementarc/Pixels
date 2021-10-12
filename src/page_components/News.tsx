import React, { ReactElement, useEffect} from 'react';
import { motion } from "framer-motion"
import Image from "../assets/images/arclipse.jpg"
import "./style_sheets/news.scss"
import { useHistory} from 'react-router';
import PatchImage from "../assets/images/patch1.jpg"
import Footer from '../components/Footer';

//Component that renders the Default screen to News Page
export default  function News_home(): ReactElement {
	//Scrolling to top when page loaded
    useEffect(() => {
		
        return(() => {
            window.scrollTo(0,0)
        })
	},[])
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
				<Patch_template date="06/10/2021" patch="1" type="Application Launch" preview={PatchImage}/>
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
				<h1>Patchnotes {props.patch}</h1>
				<p>2 Weeks ago</p>
			</div>
		</motion.div>
		
	)
}
