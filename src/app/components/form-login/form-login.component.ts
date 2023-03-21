import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.less']
})
export class FormLoginComponent implements OnInit {


  // adicionar click exibir/ocultar 
  exibirModalLogin: any = true;
  toggleRecuperarSenha() {
    this.exibirModalLogin = !this.exibirModalLogin;
  }
  exibirModalCadastro: any = true;
  toggleCadastroUsuario() {
    this.exibirModalCadastro = !this.exibirModalCadastro;
  }
  exibirModalChaveAcesso: any = true;
  toggleChaveAcesso() {
    this.exibirModalChaveAcesso = !this.exibirModalChaveAcesso;
  }
  // fim adicionar click exibir/ocultar 

  constructor() { }

  ngOnInit(): void {
  }

}
