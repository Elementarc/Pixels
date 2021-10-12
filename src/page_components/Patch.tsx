import React, { ReactElement, useEffect} from 'react';
import { motion } from "framer-motion"
import { useHistory, useParams } from 'react-router';
//SCSS
import "./style_sheets/patch.scss"
import patch_v1 from "../assets/images/patch1.jpg"
import Footer from '../components/Footer';

export default function Patch_main(): ReactElement {
    const param: any = useParams()
    const patch = param.patch
    //Scrolling to top when page loaded
    useEffect(() => {
		
        return(() => {
            window.scrollTo(0,0)
        })
	},[])
    if(patch === "patchnote_1") {
        return (
            <Patchnote_1 />
        )
    } else {
        return(
            <div></div>
        )
    }
}


//Component that renders Patch
function Patchnote_1(): ReactElement {
    const history = useHistory()

    return (
        <motion.div initial={{ opacity: 0}} animate={{opacity: 1, transition: {duration: 0.12}}} exit={{opacity: 0, transition: {duration: 0.12}}} className="patch_container">
            <div className="patch_preview_container">
                <img src={patch_v1} alt="" />
                <div className="patch_preview_blur"></div>
            </div>
            <div className="patch_content_container">
                <div className="patch_main_content_container">
                    <div className="patch_main_content">
                        <h2>Application Launch</h2>
                        <h1>Patchnotes 1 September, 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel. Lacus, ipsum eleifend eget erat faucibus lectus. Aenean ultricies ullamcorper convallis lorem. Aliquam elit sociis nec tellus nibh. Elit turpis tempus placerat mi. Mollis lectus sed risus nisi, et. Dignissim urna, vitae sed laoreet ut at neque netus.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel. Lacus, ipsum eleifend eget erat faucibus lectus. Aenean ultricies ullamcorper convallis lorem. Aliquam elit sociis nec tellus nibh. Elit turpis tempus placerat mi. Mollis lectus sed risus nisi, et. Dignissim urna, vitae sed laoreet ut at neque netus.  Mollis lectus sed risus nisi,  Mollis lectus sed risus nisi.</p>

                        <img src={patch_v1} alt="" />
                        <h1 style={{marginTop: "2rem"}}>PixelPalast</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel. Lacus, ipsum eleifend eget erat faucibus lectus. Aenean ultricies ullamcorper convallis lorem. Aliquam elit sociis nec tellus nibh. Elit turpis tempus placerat mi. Mollis lectus sed risus nisi, et. Dignissim urna, vitae sed laoreet ut at neque netus.</p>
                        <br />
                        <p style={{marginBottom: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel. Lacus, ipsum eleifend eget erat faucibus lectus. Aenean ultricies ullamcorper convallis lorem. Aliquam elit sociis nec tellus nibh. Elit turpis tempus placerat mi. Mollis lectus sed risus nisi, et. Dignissim urna, vitae sed laoreet ut at neque netus.  Mollis lectus sed risus nisi,  Mollis lectus sed risus nisi.</p>
                        <button onClick={() => {history.push("/news")}} style={{marginBottom: "6rem"}}>Go Back</button>
                    </div>
                </div>

                <Forward_container/>
            </div>

            <Footer/>
        </motion.div>
    );
}

//Container That Renders all Forward_items
function Forward_container(): ReactElement {
  return (
    <div className="patch_forward_container">

        <Forward_item img={patch_v1} header="Plans for the future" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Forward_item img={patch_v1} header="Plans for the future" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>

    </div>
  );
}
//Creating a Forward item. Used by Forward_container
function Forward_item(props: any) {
  return (

    <div className="patch_forward_content_container">

        <div className="patch_forward_1_container">

            <div className="patch_forward_img_container">
                <img src={props.img} alt="" />
            </div>
            
            <div className="patch_forward_info_content">
                <h2>{props.header}</h2>
                <p>{props.description}</p>
            </div>
            
        </div>
        <span />

    </div>

  );
}

