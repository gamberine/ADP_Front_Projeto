import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { homeLandingComponent } from './components/home-landing.component';
import { FormCadastroComponent } from './components/form-login/form-cadastro/form-cadastro.component';
import { AreaInternaComponent } from './pages/area-interna/area-interna.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { GerenciarComponent } from './pages/gerenciar/gerenciar.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: homeLandingComponent },
    { path: 'area-interna',     component: AreaInternaComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'nucleoicons', component: NucleoiconsComponent },
    { path: 'form-cadastro', component: FormCadastroComponent },
    { path: 'gerenciar',     component: GerenciarComponent },
    { path: 'contato',     component: ContatoComponent },
    { path: 'ajuda',     component: AjudaComponent }
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
