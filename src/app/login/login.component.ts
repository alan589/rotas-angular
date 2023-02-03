import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {nome: '', senha: ''};
  mostrarLogin: boolean = true;

  constructor(private authService: AuthService) {

   }

   fazerLogin(){
     this.authService.fazerLogin(this.usuario);
   }
  ngOnInit(): void {
      this.authService.emitirAutenticacao.subscribe(
        mostrar => {
          this.mostrarLogin = false;
        }
      )
    }

}
