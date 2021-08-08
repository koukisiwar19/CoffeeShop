import { Routes } from '@angular/router';
import { CrudsComponent } from 'app/pages/categories/cruds/cruds.component';
import { CoffeeCrudsComponent } from 'app/pages/coffee-shops/coffee-cruds/coffee-cruds.component';
import { CommandeComponent } from 'app/pages/commande/commande.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { ProduitsComponent } from 'app/pages/produits/produits.component';
import { UsersComponent } from 'app/pages/users/users.component';


export const AdminLayoutRoutes: Routes = [
    {path: 'cruds', component: CrudsComponent},
    {path : 'coffee-cruds', component : CoffeeCrudsComponent},
    {path: 'commande', component : CommandeComponent},
    {path: 'produits', component : ProduitsComponent},
    {path: 'login', component : LoginComponent},
    {path: 'users', component: UsersComponent},
  
];
