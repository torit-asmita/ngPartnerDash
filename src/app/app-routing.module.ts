import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from './authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
const routes: Routes = [
//   {path:'',redirectTo:'splash-screen',pathMatch:"full"},
//   {path:"splash-screen",component:SplashScreenComponent},
//   {path:"login",component:LoginComponent},
//   {path:"dashboard",
//   canActivate:[AuthenticationGuard],component:DashboardComponent, 
// },
{ path: '', component: DashboardComponent, canActivate: [AuthenticationGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },

// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
