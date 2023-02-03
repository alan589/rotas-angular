import { Component, OnInit } from '@angular/core';
import { AuthService } from "./login/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rotas-angular';

  mostrarMenu: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.authService.emitirAutenticacao.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

  deslogar(){
    this.mostrarMenu = false;
    this.router.navigate(['/login']);
  }
}
