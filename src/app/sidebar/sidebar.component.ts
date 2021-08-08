import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [

    {path : '/cruds', title :'Catégories', icon:'', class: ''},
    {path : '/coffee-cruds', title :'coffee shop', icon:'', class: ''},
    {path : '/produits', title: 'produits',  icon:'', class:''},
    {path: '/users', title: 'users', icon:'', class: ''}
  
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
