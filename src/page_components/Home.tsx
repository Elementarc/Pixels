import React, {ReactElement} from 'react';
import {motion} from "framer-motion"
//React Components
import Footer from '../components/Footer';
//StyleSheets
import "./style_sheets/home.scss"


export default function Home_main(): ReactElement {

    
    return (
    <motion.div initial={{ opacity: 0}} animate={{opacity: 1, transition: {duration: 0.15}}} exit={{opacity: 0, transition: {duration: 0.15}}}  className="home_container">
        
        <section className="news_section_container">
            <div className="news_section_content">
                <h2>News</h2>
                <h1>Our Recent Updates</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lectus eu tincidunt faucibus. Vel venenatis eget euismod nulla ut imperdiet tristique amet scelerisque. Sed scelerisque sit faucibus imperdiet. Leo senectus diam volutpat arcu.</p>
                <button>Learn more</button>
            </div>

            <div className="news_section_background_blur" />
        </section>

        <section className="signup_section_container">
            <div className="signup_section_content">
                <h1>Create Account</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lectus eu tincidunt faucibus. Vel venenatis eget euismod nulla ut imperdiet tristique amet scelerisque. Sed scelerisque sit faucibus imperdiet. Leo senectus diam volutpat arcu.</p>
                <button>Create Account</button>
            </div>

            <div className="signup_section_background_blur" />
        </section>

        <Footer/>
    </motion.div>
    );
}

