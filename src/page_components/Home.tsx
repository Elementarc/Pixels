import React, { ReactElement } from 'react';
import {motion} from "framer-motion"
import "./style_sheets/home.scss"
import Footer from "../components/Footer"
const landing_page = ():ReactElement => {
    
    return (
        <motion.div initial={{ opacity: 0}} animate={{opacity: 1, transition: {duration: 0.15}}} exit={{opacity: 0, transition: {duration: 0.15}}}  className="home_container">
            <div className="title_screen_container"></div>

            <Add_Section_Row sectionName = "Uploads"/>
            <Add_Section_Row sectionName = "Recent"/>
            <Footer/>
        </motion.div>
    );
}

interface Section_row{
    sectionName: string
}
function Add_Section_Row(props: Section_row):ReactElement{
    return ( 
        <div className="section_item">
            <h1> {`— ${props.sectionName}`} </h1>
            <div className="section_grid">
                <div className="grid_item"></div>
                <div className="grid_item"></div>
                <div className="grid_item"></div>
                <div className="grid_item"></div>
            </div>
            
        </div>
    )
}
export default landing_page;
