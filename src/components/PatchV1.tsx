import React, { ReactElement } from 'react';
import "../components/style_sheets/patch_style_sheets/patchv1.scss"

import Patch1 from "../assets/images/patch1.jpg"
import { useHistory } from 'react-router';
export default function Patch_V1(): ReactElement {
    const history = useHistory()
    return (
        <div className="patch_container">

            <div className="patch_preview_container">
                <img src={Patch1} alt="" />
                <div className="patch_preview_blur"></div>
            </div>

            <div className="patch_content_container">
                
                <div className="patch_main_content_container">
                    <div className="patch_main_content">
                        <h2>Application changes</h2>
                        <h1>Patchnotes 1 September, 2021</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel. Lacus, ipsum eleifend eget erat faucibus lectus. Aenean ultricies ullamcorper convallis lorem. Aliquam elit sociis nec tellus nibh. Elit turpis tempus placerat mi. Mollis lectus sed risus nisi, et. Dignissim urna, vitae sed laoreet ut at neque netus.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel. Lacus, ipsum eleifend eget erat faucibus lectus. Aenean ultricies ullamcorper convallis lorem. Aliquam elit sociis nec tellus nibh. Elit turpis tempus placerat mi. Mollis lectus sed risus nisi, et. Dignissim urna, vitae sed laoreet ut at neque netus.  Mollis lectus sed risus nisi,  Mollis lectus sed risus nisi.</p>

                        <img src={Patch1} alt="" />
                        <h1 style={{marginTop: "2rem"}}>PixelPalast</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel. Lacus, ipsum eleifend eget erat faucibus lectus. Aenean ultricies ullamcorper convallis lorem. Aliquam elit sociis nec tellus nibh. Elit turpis tempus placerat mi. Mollis lectus sed risus nisi, et. Dignissim urna, vitae sed laoreet ut at neque netus.</p>
                        <br />
                        <p style={{marginBottom: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat fermentum tellus tellus sed justo elementum nunc, vel. Lacus, ipsum eleifend eget erat faucibus lectus. Aenean ultricies ullamcorper convallis lorem. Aliquam elit sociis nec tellus nibh. Elit turpis tempus placerat mi. Mollis lectus sed risus nisi, et. Dignissim urna, vitae sed laoreet ut at neque netus.  Mollis lectus sed risus nisi,  Mollis lectus sed risus nisi.</p>
                        <button onClick={() => {history.push("/news")}} style={{marginBottom: "6rem"}}>Go Back</button>
                    </div>
                </div>

                <div className="patch_forward_container">

                </div>
            </div>

        </div>
    );
}
