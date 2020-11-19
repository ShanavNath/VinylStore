
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth/auth.guard';
import { ProductComponent } from './product/product.component'
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent},
  { path: 'product', component: ProductComponent},
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'company-add', component: CompanyAddComponent },
  { path: 'company-detail/:id', component: CompanyDetailComponent },
  { path: 'company-edit/:id', component: CompanyEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
