/* eslint-disable */
import React, {ReactElement, useContext, useEffect, useState} from "react"
import {motion, useAnimation, AnimatePresence } from "framer-motion";
import { useLocation, useHistory } from 'react-router-dom';
import {NavItem, NavContext} from "../types"
//SVG Components (ICONS)
import NavIcon from "../assets/icons/NavIcon.svg"
import CloseIcon from "../assets/icons/CloseIcon.svg"
import HomeIcon from "../assets/icons/HomeIcon.svg"
import NewsIcon from "../assets/icons/NewsIcon.svg"
import PacksIcon from "../assets/icons/PacksIcon.svg"
import SearchIcon from "../assets/icons/SearchIcon.svg"
import SignInIcon from "../assets/icons/SignInIcon.svg"
//Scss
import "./style_sheets/navigation.scss"
//Context
import { isDesktopContext } from "../App";
export const NavStateContext: any = React.createContext(null)

export default function Navigation(): ReactElement {
    const [NavState, setNavState] = useState(false);
    const isDesktop = useContext(isDesktopContext)
    const navContext: NavContext = {
        navState: NavState,
        setNavState: setNavState,
    }

    return(
        <NavStateContext.Provider value={navContext}>
            {isDesktop === true &&
                <Navigation_desktop key="Navigation_Desktop"/>
            }
            {isDesktop === false &&
               <Navigation_mobile key="Navigation_Mobile"/>
            }
        </NavStateContext.Provider>
    )
}
//Navigation Component for Desktop
function Navigation_desktop(): ReactElement {
    const navContext: NavContext = useContext(NavStateContext)
    const setNavState = navContext.setNavState
    const navState = navContext.navState

    const navContainerAnimation = useAnimation()
    
      
    //Toggle Animation for navigation When NavState changes For mobile & Desktop
    useEffect(() => {
        const NavContent = document.getElementById("nav_content") as HTMLDivElement
        //Animations For Navigation(DESKTOP)
        
        function animateNavDesktop(navState: boolean): void{
            NavContent.style.overflowX = "hidden"
            NavContent.style.overflowY = "scroll"
            NavContent.scrollTop = 0
            
            document.body.style.overflow = "unset"
            //Scrolling To Top Of Navigation When Switching to between Desktop & Mobile Version
            if(navState === false) {
                navContainerAnimation.start({
                    width: "",
                    height: ``,
                    transition: {duration: 0.25},
                })
            } else {
                navContainerAnimation.start({
                    width: "380px",
                    height: ``,
                    transition: {duration: 0.25},
                })
            }
        }

        animateNavDesktop(navState)
        
    }, [navState, navContainerAnimation]);

    //Setting NavHeight to device Window inner heigth
    useEffect(() => {
        setNavState(false)
        const NavContent = document.getElementById("nav_content") as HTMLDivElement

        function resize() {
            
            NavContent.style.height = `${window.innerHeight}px`
        }
        resize()

        window.addEventListener("resize", resize)

        return(() => {
            window.removeEventListener("resize", resize)
        })

    }, [setNavState])

    return (
        <motion.div animate={navContainerAnimation} className="nav_container_desktop" id="nav_container">

            <motion.div className="nav_content" id="nav_content">

                <motion.div className="nav_button_container" id="nav_button_container">
                    <AnimatePresence exitBeforeEnter>
                        {navContext.navState === true &&
                            <motion.div key="menu" initial={{scale: 0.9}} animate={{scale: 1, transition: {duration: 0.18, type: "spring"}}} exit={{scale: 0, transition: {duration: 0.1}}}>
                                <CloseIcon onClick={() => navContext.setNavState(!navContext.navState)} className="nav_svg"/>
                            </motion.div>
                        } 
                        {navContext.navState === false &&
                            <motion.div key="close" initial={{scale: 0.9}} animate={{scale: 1, transition: {duration: 0.18, type: "spring"}}} exit={{scale: 0, transition: {duration: 0.1}}}>
                                <NavIcon onClick={() => navContext.setNavState(!navContext.navState)} className="nav_svg"/>
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.div>

                <div className="nav_items_container">
                    <div onClick={() => {navContext.setNavState(false)}}>
                        <ul>
                            <Nav_item label="Home" icon={HomeIcon} link="/home"/>
                            <Nav_item label="News" icon={NewsIcon} link="/news" />
                            <Nav_item label="Packs" icon={PacksIcon} link="/packs"/>
                            <Nav_item label="Search" icon={SearchIcon} link="/search"/>
                        </ul>
                    </div>

                    <div className="nav_sign_in" id="nav_button_container">
                        <div onClick={() => {navContext.setNavState(false)}}>
                            <ul>
                                <Nav_item label="Sign In" icon={SignInIcon} link="/login"/>
                            </ul>
                        </div>
                    </div>
                </div>

            </motion.div>

        </motion.div>
    )
}
//Navigation Component for Mobile
function Navigation_mobile(): ReactElement {
    const navContext: NavContext = useContext(NavStateContext)
    const setNavState = navContext.setNavState
    const navState = navContext.navState
    const navContainerAnimation = useAnimation()

    //Toggle Animation for navigation When NavState changes For mobile
    useEffect(() => {
        const getNavScrollContainer = document.getElementById("nav_content") as HTMLDivElement
        //Animations For Navigation(MOBILE)
        function animateNavMobile(navState: boolean): void{
            getNavScrollContainer.style.scrollBehavior = "smooth"
            getNavScrollContainer.scrollTop = 0
            document.body.style.overflow = "unset"

            if(navState === false) {
                getNavScrollContainer.style.overflowX = "hidden"
                getNavScrollContainer.style.overflowY = "hidden"

                navContainerAnimation.start({
                    width: "",
                    height: "",
                    transition: {duration: 0.25},
                })
            
            } else {
                getNavScrollContainer.style.overflowX = "hidden"
                getNavScrollContainer.style.overflowY = "scroll"
                document.body.style.overflow = "hidden"

                navContainerAnimation.start({
                    width: "",
                    height: `100%`,
                    transition: {duration: 0.25},
                })
    
            }
        }
        animateNavMobile(navState)

    }, [navState, navContainerAnimation]);

    //Setting NavHeight to device Window inner heigth
    useEffect(() => {
        setNavState(false)
        const getNavScrollContainer = document.getElementById("nav_content") as HTMLDivElement

        function resize() {
            getNavScrollContainer.style.height = ``
        }
        resize()

        window.addEventListener("resize", resize)

        return(() => {
            window.removeEventListener("resize", resize)
        })

    }, [setNavState])

    return (
        <motion.div animate={navContainerAnimation} className="nav_container_mobile" id="nav_container">

            <motion.div className="nav_content" id="nav_content">

                <motion.div className="nav_button_container" id="nav_button_container">
                    <AnimatePresence exitBeforeEnter>
                        {navContext.navState === true &&
                            <motion.div key="menu" initial={{scale: 0.9}} animate={{scale: 1, transition: {duration: 0.18, type: "spring"}}} exit={{scale: 0, transition: {duration: 0.1}}}>
                                <CloseIcon onClick={() => navContext.setNavState(!navContext.navState)} className="nav_svg"/>
                            </motion.div>
                        } 
                        {navContext.navState === false &&
                            <motion.div key="close" initial={{scale: 0.9}} animate={{scale: 1, transition: {duration: 0.18, type: "spring"}}} exit={{scale: 0, transition: {duration: 0.1}}}>
                                <NavIcon onClick={() => navContext.setNavState(!navContext.navState)} className="nav_svg"/>
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.div className="nav_items_container">
                    <div onClick={() => {navContext.setNavState(false)}}>
                        <ul>
                            <Nav_item label="Home" icon={HomeIcon} link="/"/>
                            <Nav_item label="News" icon={NewsIcon} link="/news"/>
                            <Nav_item label="Packs" icon={PacksIcon} link="/packs"/>
                            <Nav_item label="Search" icon={SearchIcon} link="/search"/>
                        </ul>
                    </div>

                    <div className="nav_sign_in" id="nav_button_container">
                        <div onClick={() => {navContext.setNavState(false)}}>
                            <Nav_item label="Sign In" icon={SignInIcon} link="/login"/>
                        </div>
                    </div>
                </motion.div>

                

            </motion.div>

        </motion.div>
    )
}
//NavItem Component
function Nav_item(props: NavItem) {
    const navContext: NavContext = useContext(NavStateContext)
    const location = useLocation()
    const history = useHistory()
    const Icon = props.icon
    
    const navItemLabelAnimation = useAnimation()
    //Showing Labels of navItems when toggling navState
    useEffect(() => {
        if(navContext.navState === true) {
            navItemLabelAnimation.start({
                transition: {duration: 0.2},
                opacity: 1,
            })
        } else {
            navItemLabelAnimation.start({
                transition: {duration: 0.2},
                opacity: 0,
            })
        }
    }, [navContext.navState, navItemLabelAnimation]);

    //Adding removing classes/styles to target Nav_item or none target Nav_item
    useEffect(() => {
        const getNavItems = document.getElementsByClassName("nav_li_item") as HTMLCollection
        
        function setNavTargets() {
            for(let i = 0; i < getNavItems.length; ++i){
                
                if(location.pathname.toLowerCase().includes(`${getNavItems[i].id}`) === true){
                    getNavItems[i].classList.add("nav_li_item_target")
                    getNavItems[i].classList.remove("nav_li_item_none_target")
                    
                } else {
                    getNavItems[i].classList.remove("nav_li_item_target")
                    getNavItems[i].classList.add("nav_li_item_none_target")
                }
                
            }
        }
        
        setNavTargets()
        
    }, [location.pathname]);

    //OnClick for NavItem to change URL
    function pushHistory() {
        if(location.pathname.toLowerCase() !== props.link.toLowerCase()){
            history.push(`${props.link}`)
        }
    }

    return(
        <motion.li className="nav_li_item" id={`${props.link.toLowerCase()}`} onClick={pushHistory}>
            <div className="nav_item">
                <Icon className="icon_svg"/>
                <motion.p animate={navItemLabelAnimation} >{props.label}</motion.p>
            </div>

            <span />
        </motion.li>
    )
}


