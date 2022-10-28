import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'; 
import { ErrorComponent } from './core/component/error/error.component';
import { CursosModule } from './cursos/cursos.module';
import { CoreModule } from './core/core.module';




@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'cursos', pathMatch: 'full'
      },
      {
        path: 'home', redirectTo: 'cursos', pathMatch: 'full'
      }
    ]
      
    ),
    CursosModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
