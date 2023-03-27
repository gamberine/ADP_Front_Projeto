import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AreaInternaComponent } from './area-interna/area-interna.component';
import { SignupComponent } from './signup/signup.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ContatoComponent } from './contato/contato.component';
import { MeusArquivosComponent } from './gerenciar/meus-arquivos/meus-arquivos.component';
import { MinhaContaComponent } from './gerenciar/minha-conta/minha-conta.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        SignupComponent,
        AreaInternaComponent,
        GerenciarComponent,
        AjudaComponent,
        ContatoComponent,
        MeusArquivosComponent,
        MinhaContaComponent
    ]
})
export class ExamplesModule { }
