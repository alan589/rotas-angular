import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlunosService } from "../alunos.service";
import { Aluno } from "../aluno";
import { UsuariosService } from "../../login/usuarios.service";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  inscricao: Subscription = new Subscription();
  mostrarEditar: boolean = true;

  id: any;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router,
    private usuariosService: UsuariosService
  ) {
  // this.id = this.route.snapshot.params['id'];
 }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     this.id = params['id'];
    //     this.aluno = this.alunosService.getAluno(this.id);
    //   }
    // );

    console.log('NgInit: AlunoDetalheComponent');
    this.mostrarEditar = this.usuariosService.getUsuario().admin;
    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno}) => {
        console.log('Recebendo o obj Aluno do resolver');
        this.aluno = info.aluno;
        this.id = info.aluno.id;
      }
    )

  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
  editarContato(){
    this.router.navigate(['alunos', this.id, 'editar']);
  }

}
