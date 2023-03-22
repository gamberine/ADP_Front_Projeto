import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.less']
})
export class FormCadastroComponent implements OnInit {


  exibirModalCadastro: any = true;
  toggleCadastroUsuario() {
    const newLocal = this;
    newLocal.exibirModalCadastro = !this.exibirModalCadastro;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
