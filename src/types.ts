export interface Main{
    
}

export interface NavItem{
    label: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    link: string
}

export interface NavContext {
    navState: boolean,
    setNavState: React.Dispatch<React.SetStateAction<boolean>>
}