import React, {ReactElement, useContext, useEffect, useState} from "react"
import {motion, useAnimation, AnimatePresence } from "framer-motion";
import { useLocation, useHistory } from 'react-router-dom';
import {NavItem} from "../types"
//SVG Components (ICONS)
import NavIcon from "../assets/icons/NavIcon.svg"
import CloseIcon from "../assets/icons/CloseIcon.svg"
import HomeIcon from "../assets/icons/HomeIcon.svg"
import NewsIcon from "../assets/icons/NewsIcon.svg"
import PacksIcon from "../assets/icons/PacksIcon.svg"
import SearchIcon from "../assets/icons/SearchIcon.svg"
import SignInIcon from "../assets/icons/SignInIcon.svg"
//Scss
import "./style_sheets/nav.scss"
//Context
import { isDesktopContext } from "../App";
/* eslint-disable */

//Navigation Component
const Navigation_main = (): ReactElement => {
    const [NavState, setNavState] = useState(false);
    const navContainerAnimation = useAnimation()
    const isDesktop = useContext(isDesktopContext)
    
    //Toggle Animation for navigation When NavState changes For mobile & Desktop
    useEffect(() => {
        const getNavScrollContainer = document.getElementById("nav_items_scroll_container") as HTMLDivElement
        
        //Animations For Navigation(DESKTOP)
        function animateNavDesktop(navState: boolean): void{
            getNavScrollContainer.style.overflowX = "hidden"
            getNavScrollContainer.style.overflowY = "scroll"
            getNavScrollContainer.scrollTop = 0
            
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
                    height: "auto",
                    transition: {duration: 0.25},
                })
    
            }
        }
        //Function That executes correct animations based on Device
        function navAnimation(isDesktop: boolean): void {
            if(isDesktop === true) {

                animateNavDesktop(NavState)
    
            } else {
    
                animateNavMobile(NavState)
    
            }
        }
        
        navAnimation(isDesktop)
        
        
    }, [NavState, isDesktop, navContainerAnimation]);

    //Setting NavHeight to device Window inner heigth
    useEffect(() => {
        setNavState(false)
        const getNavScrollContainer = document.getElementById("nav_items_scroll_container") as HTMLDivElement

        function resize() {
            if(isDesktop === true) {
                getNavScrollContainer.style.height = `${window.innerHeight}px`
            } else {
                getNavScrollContainer.style.height = ``
            }
        }
        resize()

        window.addEventListener("resize", resize)

        return(() => {
            window.removeEventListener("resize", resize)
        })

    }, [isDesktop])

    return (
        <motion.div animate={navContainerAnimation} className="nav_container" id="nav_container">

            <motion.div className="nav_items_scroll_container" id="nav_items_scroll_container">

                <motion.div className="nav_button_container" id="nav_button_container">
                    <AnimatePresence exitBeforeEnter>
                        {NavState === true &&
                            <motion.div key="menu" initial={{scale: 0.9}} animate={{scale: 1, transition: {duration: 0.18, type: "spring"}}} exit={{scale: 0, transition: {duration: 0.1}}}>
                                <CloseIcon onClick={() => setNavState(!NavState)} className="nav_svg"/>
                            </motion.div>
                        } 
                        {NavState === false &&
                            <motion.div key="close" initial={{scale: 0.9}} animate={{scale: 1, transition: {duration: 0.18, type: "spring"}}} exit={{scale: 0, transition: {duration: 0.1}}}>
                                <NavIcon onClick={() => setNavState(!NavState)} className="nav_svg"/>
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.div>

                <motion.ul>
                    <div onClick={() => {setNavState(false)}}>
                        <Nav_item label="Home" icon={HomeIcon} link="/" navState={NavState}  />
                        <Nav_item label="News" icon={NewsIcon} link="/news" navState={NavState} />
                        <Nav_item label="Packs" icon={PacksIcon} link="/packs" navState={NavState}  />
                        <Nav_item label="Search" icon={SearchIcon} link="/search" navState={NavState}  />
                    </div>
                </motion.ul>

                <motion.div className="nav_sign_in" id="nav_button_container">
                    <div onClick={() => {setNavState(false)}}>
                        <Nav_item label="Sign In" icon={SignInIcon} link="/login" navState={NavState}/>
                    </div>
                </motion.div>

            </motion.div>

        </motion.div>
    )
}

//NavItem Component
const Nav_item = (props: NavItem) => {
    const location = useLocation()
    const history = useHistory()
    const Icon = props.icon
    
    const navItemLabelAnimation = useAnimation()
    //Showing Labels of navItems when toggling navState
    useEffect(() => {
        if(props.navState === true) {
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
    }, [props.navState, navItemLabelAnimation]);

    //Adding removing classes/styles to target Nav_item or none target Nav_item
    useEffect(() => {
        const getNavItems = document.getElementsByClassName("nav_li_item") as HTMLCollection
        
        for(let i = 0; i < getNavItems.length; ++i){
            if(getNavItems[i].id === location.pathname){
                getNavItems[i].classList.add("nav_li_item_target")
                getNavItems[i].classList.remove("nav_li_item_none_target")
                
            } else {
                getNavItems[i].classList.remove("nav_li_item_target")
                getNavItems[i].classList.add("nav_li_item_none_target")
            }
        }
        
    }, [location.pathname]);

    //OnClick for NavItem to change URL
    function pushHistory() {
        if(location.pathname !== props.link){
            history.push(`${props.link}`)
        }
    }

    return(
        <motion.li className="nav_li_item" id={`${props.link}`} onClick={pushHistory}>
            <div className="nav_item">
                <Icon className="icon_svg"/>
                <motion.p animate={navItemLabelAnimation} >{props.label}</motion.p>
            </div>

            <span />
        </motion.li>
    )
}

export default Navigation_main