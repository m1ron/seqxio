

export interface DashboardLinks {
    name: string;
    url: string;
    icon?: string;
}

export interface SidebarItem {
    title: string;
    sublinks: DashboardLinks[];
}

export interface RoadsDetails{
name:string;
color:string;
}

export interface PhotoDetails {
    image: string;
}

