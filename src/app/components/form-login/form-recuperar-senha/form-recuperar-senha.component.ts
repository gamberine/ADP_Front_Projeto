import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-recuperar-senha',
  templateUrl: './form-recuperar-senha.component.html',
  styleUrls: ['./form-recuperar-senha.component.less']
})
export class FormRecuperarSenhaComponent implements OnInit {

  exibirModalLogin: any = true;
  toggleRecuperarSenha() {
    this.exibirModalLogin = !this.exibirModalLogin;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
