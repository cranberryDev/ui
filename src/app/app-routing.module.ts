import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPlansComponent } from './checkout-plans/checkout-plans.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'create',component:CreateAccountComponent},
{path:'checkout',component:CheckoutPlansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
