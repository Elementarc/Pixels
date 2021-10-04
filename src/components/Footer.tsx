import React, { ReactElement } from 'react';
import "./style_sheets/footer.scss"
/*eslint-disable */
export default function Footer(): ReactElement {
  return (
    <footer className="footer_container">
        <h1>Pixepalast</h1>

        <div className="socials_container">
            <Socials link="instagram" icon=""></Socials>
            <Socials link="instagram" icon=""></Socials>
            <Socials link="instagram" icon=""></Socials>
        </div>

        <div className="legal_container">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
            <a href="#">Cookies</a>
        </div>
    </footer>
  );
}


function Socials(props: any): ReactElement {
    const icon = props.icon
    return(
        <a href={props.link}>
            <img src={icon} alt="Icon" style={{height: "100%", width: "100%"}}></img>
        </a>
    )
}