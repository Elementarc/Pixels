import React, {ReactElement} from 'react';
//React Components
import Footer from '../components/Footer';
//StyleSheets
import "./style_sheets/home.scss"


export default function Home_main(): ReactElement {

    return (
    <div className="home_container">
        <section className="create_account_section_container">
            <div className="create_account_section_content">
                <h2>New Sanctuary</h2>
                <h1>PixelPalast</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lectus eu tincidunt faucibus. Vel venenatis eget euismod nulla ut imperdiet tristique amet scelerisque. Sed scelerisque sit faucibus imperdiet. Leo senectus diam volutpat arcu. Consequat libero, scelerisque sed pretium sit semper.</p>
                <button>Create Account</button>
            </div>
        </section>
        <Footer/>
    </div>
    );
}

