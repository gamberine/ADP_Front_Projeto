import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { homeLandingComponent } from './components/home-landing.component';
import { FormCadastroComponent } from './components/form-login/form-cadastro/form-cadastro.component';
import { AreaInternaComponent } from './examples/area-interna/area-interna.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: homeLandingComponent },
    { path: 'user-profile',     component: AreaInternaComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'form-cadastro', component: FormCadastroComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
