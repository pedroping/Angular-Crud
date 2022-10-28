import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursosService } from '../servicos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  Cursos: Curso[] = [];
  filteredCursos: Curso[] = [];
  _filterBy!: string;
  encontrou: boolean = false;

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.getCursos();
    
  }

  getCursos(){
    this.cursoService.getCURSOS().subscribe({
      next: Cursos => {
          this.Cursos = Cursos;
          this.filteredCursos = this.Cursos;
      },
      error: err => console.log('Error', err) 
    })
  }

  deletar(id: number){
    this.filteredCursos = this.filteredCursos.filter((curso: Curso) =>
      curso.id !== id
    )
    this.cursoService.deletarCurso(id).subscribe();

  }
  set filter(valor: string){
    this._filterBy = valor;

    this.filteredCursos = this.Cursos.filter((curso: Curso) =>
     curso.nome!.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1
    )
  }
  get filter(){
    return this._filterBy;
  }
}
