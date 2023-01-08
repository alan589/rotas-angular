import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { CursosService } from "../cursos.service";
@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrls: ['./curso-nao-encontrado.component.css']
})
export class CursoNaoEncontradoComponent implements OnInit {
  inscricao: Subscription = new Subscription();
  id: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

}
