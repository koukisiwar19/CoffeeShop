import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from 'app/pages/categories/categories.component';
import { CrudsComponent } from 'app/pages/categories/cruds/cruds.component';
import { CoffeeCrudsComponent } from 'app/pages/coffee-shops/coffee-cruds/coffee-cruds.component';
import { CoffeeShopsComponent } from 'app/pages/coffee-shops/coffee-shops.component';
import { CommandeComponent } from "app/pages/commande/commande.component";
import { ProduitsComponent } from 'app/pages/produits/produits.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { UsersComponent } from 'app/pages/users/users.component';


@NgModule({
  imports: [
    CommonModule,
    
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    CategoriesComponent,
    CrudsComponent,
    CoffeeCrudsComponent,
    CoffeeShopsComponent,
    CommandeComponent,
    ProduitsComponent,
    LoginComponent,
    UsersComponent,
    
 
  ]
})

export class AdminLayoutModule {}
