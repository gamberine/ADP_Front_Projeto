import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { homeLandingComponent } from './home-landing.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormCadastroComponent } from './form-login/form-cadastro/form-cadastro.component';
import { FormRecuperarSenhaComponent } from './form-login/form-recuperar-senha/form-recuperar-senha.component';
import { FormChaveAcessoComponent } from './form-login/form-chave-acesso/form-chave-acesso.component';
import { FormConfirmacaoContaComponent } from './form-login/form-confirmacao-conta/form-confirmacao-conta.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        homeLandingComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        FormLoginComponent,
        FormCadastroComponent,
        FormRecuperarSenhaComponent,
        FormChaveAcessoComponent,
        FormConfirmacaoContaComponent
    ],
    entryComponents: [NgbdModalContent],
    exports: [homeLandingComponent]
})
export class ComponentsModule { }
