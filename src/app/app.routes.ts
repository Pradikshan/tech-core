import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home - Tech Core' },
  {
    path: 'product',
    component: ProductComponent,
    title: 'Product - Tech Core',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
