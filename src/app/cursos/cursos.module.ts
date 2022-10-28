import { NgModule } from "@angular/core";
import { FormsModule,  ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdicionarComponent } from "./adicionar/adicionar.component";
import { CursosComponent } from "./cursos.component";
import { DetalhesComponent } from "./detalhes/detalhes.component";
import { EditarComponent } from "./editar/editar.component";
import { TrocarPipe } from "../pipes/trocar.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { RatingPipe } from "../pipes/rating.pipe";


@NgModule({
    declarations: [
        AdicionarComponent,
        DetalhesComponent,
        EditarComponent,
        CursosComponent,
        TrocarPipe,
        RatingPipe 
    ], 
    imports: [
        CommonModule,
        FormsModule, 
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forChild([
              {
                path: '', redirectTo: 'cursos', pathMatch: 'full'
              },
              {
                path: 'home', redirectTo: 'cursos', pathMatch: 'full'
              },
              {
                path: 'cursos', component: CursosComponent
              },
              {
                path: 'cursos/detalhes/:id', component: DetalhesComponent
              },
              {
                path: 'cursos/editar/:id', component: EditarComponent
              },
              {
                path: 'cursos/adicionar', component: AdicionarComponent
              }, 
        ])
    ]
})

export class CursosModule {

}