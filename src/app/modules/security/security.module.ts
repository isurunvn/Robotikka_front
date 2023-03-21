import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyButtonModule} from "@angular/material/legacy-button";
import {MatLegacyInputModule} from "@angular/material/legacy-input";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { SecurityHeaderComponent } from './components/security-header/security-header.component';


@NgModule({
  declarations: [
    SecurityComponent,
    LoginPageComponent,
    SignupPageComponent,
    SecurityHeaderComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SecurityModule { }
