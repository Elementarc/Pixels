export interface Main{
    
}

export interface NavItem{
    label: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    link: string
    navState: boolean
}