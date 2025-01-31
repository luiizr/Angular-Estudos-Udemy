import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
// import { NavComponent } from './components/template/nav/nav.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';



export const routes: Routes = [
    { path: "", component: HomeComponent }, 
    { path: "products", component: ProductCrudComponent },
    { path: "products/create", component: ProductsCreateComponent },
  ];
  
