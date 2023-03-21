import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { homeLandingComponent } from './components/home-landing.component';
import { FormCadastroComponent } from './components/form-login/form-cadastro/form-cadastro.component';
import { AreaInternaComponent } from './pages/area-interna/area-interna.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: homeLandingComponent },
    { path: 'area-interna',     component: AreaInternaComponent },
    { path: 'signup',           component: SignupComponent },
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
