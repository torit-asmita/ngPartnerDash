import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from './authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { RegisterComponent } from './register/register.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { TransactionsComponent } from './transactions/transactions.component';
const routes: Routes = [
//   {path:'',redirectTo:'splash-screen',pathMatch:"full"},
//   {path:"splash-screen",component:SplashScreenComponent},
//   {path:"login",component:LoginComponent},
//   {path:"dashboard",
//   canActivate:[AuthenticationGuard],component:DashboardComponent, 
// },
{path: '',redirectTo:'login',pathMatch:"full"},
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard] },
{ path: 'login', component: LoginComponent, canActivate: [AuthenticationGuard] },
{ path: 'register', component: RegisterComponent, canActivate: [AuthenticationGuard] },
{path:'merchants',component:MerchantsComponent, canActivate: [AuthenticationGuard]},
{path:'transactions',component:TransactionsComponent, canActivate: [AuthenticationGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
