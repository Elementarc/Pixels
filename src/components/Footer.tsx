import React, { ReactElement } from 'react';
import TwitterLogo from "../assets/logos/twitter.svg"
import "./style_sheets/footer.scss"
/*eslint-disable */
export default function Footer(): ReactElement {
  return (
    <footer className="footer_container">
        <h1>Pixepalast</h1>
        <div className="socials_container">
            <Socials link="https://twitter.com/home" icon={TwitterLogo} />
        </div>
        <div className="legal_container">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
            <a href="#">Cookies</a>
        </div>
        <p>©2021 By Hamit Kiziltas. ALL RIGHTS RESERVED. All trademarks referenced herein are the properties of their respective owners.</p>

    </footer>
  );
}


function Socials(props: any): ReactElement {
    const Icon: React.FC<React.SVGProps<SVGSVGElement>> = props.icon
    return(
        <a href={props.link} rel="noreferrer" target="_blank">
            <Icon />
        </a>
    )
}