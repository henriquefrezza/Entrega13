import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostra-nome',
  templateUrl: './mostra-nome.component.html',
  styleUrls: ['./mostra-nome.component.css']
})
export class MostraNomeComponent{

  nome: string;

  armazenaNome(nome): void{
    this.nome = nome;
    console.log(nome);
  }

}
