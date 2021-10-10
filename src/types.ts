export interface NavItem{
    label: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    link: string
}

export interface NavContext {
    navState: boolean,
    setNavState: React.Dispatch<React.SetStateAction<boolean>>
}

export interface AppContext {
    isDesktop: boolean,
    nav: NavContext
    
}