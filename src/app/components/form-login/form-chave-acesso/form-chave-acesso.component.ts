import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-chave-acesso',
  templateUrl: './form-chave-acesso.component.html',
  styleUrls: ['./form-chave-acesso.component.less']
})
export class FormChaveAcessoComponent implements OnInit {

  exibirModalChaveAcesso: any = true;
  toggleChaveAcesso() {
    this.exibirModalChaveAcesso = !this.exibirModalChaveAcesso;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
