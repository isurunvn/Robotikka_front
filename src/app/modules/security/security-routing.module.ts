import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {SignupPageComponent} from "./components/signup-page/signup-page.component";

const routes: Routes = [
  { path: '', component: SecurityComponent, children:[
      {path:'', redirectTo:'/security/login', pathMatch:"full"},
      {path:'login', component: LoginPageComponent},
      {path:'signup', component: SignupPageComponent}
    ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
