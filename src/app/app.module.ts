import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from "./app.routing.module";
import { CursosModule } from "./cursos/cursos.module";

import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
