import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: any = [
    {id:1, nome:'Alan',email:'alan@email.com'},
    {id:2, nome:'João',email:'joao@email.com'},
    {id:3, nome:'Maria',email:'maria@email.com'}
  ]
  constructor() { }

  getAlunos(){
    return this.alunos;
  }
  getAluno(id: number){
    let alunos = this.getAlunos();

    for (let i = 0; i < alunos.length; i++) {
      let aluno = alunos[i];

      if(aluno.id == id) return aluno;

    }
    return null;
  }
}
