import React, {ReactElement, useEffect, useState} from 'react';
import { Switch , Route, useLocation} from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';

//React Components
import Navigation from "./components/Navigation"
import Home from "./page_components/Home"
import News from "./page_components/News"
//StyleSheets
import "./style_sheets/app.scss"


//Creating Context
export const isDesktopContext = React.createContext(true)

//App Component
export default function App_main(): ReactElement {
    const location = useLocation()
    //Setting IsDesktop to tell other Components if App is mobileDevice or DesktopDevice
    const [isDesktop, setIsDesktop] = useState(() => {
        return window.innerWidth > 1024 ? true: false
    });

    //Checks if Application IsDesktop or not
    useEffect(() => {
        function resize(){
            const deviceWidth = window.innerWidth

            if(deviceWidth > 1024){
                setIsDesktop(true)
            } else {
                setIsDesktop(false)
            }
        }

        window.addEventListener("resize", resize)
        return(() => {
            window.removeEventListener("resize", resize)
        })
    }, []);

    return (
        <isDesktopContext.Provider value={isDesktop}>
            <div className="app_container">
                <Navigation/>

                <div className="app_content_container" id="app_content_container">
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            
                            <Route strict exact path="/">
                                <Home/>
                            </Route>

                            <Route strict path="/news">
                                <News/>
                            </Route>

                        </Switch>
                    </AnimatePresence>
                </div>

            </div>
        </isDesktopContext.Provider>
    );
}