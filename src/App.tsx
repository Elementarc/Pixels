import React, {ReactElement, useEffect, useState} from 'react';
import { Switch , Route, useLocation, Redirect} from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';
//React Components
import Navigation from "./components/Navigation"
import News from "./page_components/News"
import Home from "./page_components/Home"
import Patch from "./page_components/Patch"
//StyleSheets
import "./style_sheets/app.scss"
//Types
import {AppContext} from "./types"
//Creating Context
export const appContext: any = React.createContext(null)
export const isDesktopContext: any = React.createContext(true)

history.scrollRestoration = "manual"

//App Component
export default function App_main(): ReactElement {
    const location = useLocation()
    //Setting IsDesktop to tell other Components if App is mobileDevice or DesktopDevice
    const [isDesktop, setIsDesktop] = useState(() => {
        return window.innerWidth >= 1024 ? true: false
    });
    const [NavState, setNavState] = useState(false);
    //Context that gets Send to all childs
    const appContextObj: AppContext = {
        isDesktop: isDesktop,
        nav:  {
            navState: NavState,
            setNavState: setNavState,
        }
        
    }
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
        <appContext.Provider value={appContextObj}>
            <div className="app_container">
                <Navigation/>

                <div className="app_content_container" id="app_content_container">

                    <div onClick={() => {setNavState(false)}} className="app_content_blur" id="app_content_blur"/>

                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            
                            <Route exact path="/home">
                                <Home/>
                            </Route>
                            
                            <Route exact path="/news">
                                <News/>
                            </Route>

                            
                            <Route exact path="/news/:patch">
                                <Patch/>
                            </Route> 
                                

                                


                    

                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>
                        </Switch>
                    </AnimatePresence>

                </div>

            </div>
        </appContext.Provider>
    );
}