import { Component, OnInit } from '@angular/core';
import { IFormCanDeactivate } from "../guards/iform-candeactivate";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, IFormCanDeactivate {
  private formMudou: boolean = true;

  constructor() { }
  ngOnInit(): void {
  }

  podeMudarRota(){
    if(this.formMudou) {
      return confirm('Tem certeza que deseja sair?');
    }

    return true;
  }

  podeDesativar(){
    return this.podeMudarRota();
  }

}
