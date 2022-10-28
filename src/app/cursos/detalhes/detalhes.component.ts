import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Curso } from 'src/app/curso';
import { CursosService } from 'src/app/servicos/cursos.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  idCurso!: number; 
  CURSO!: Curso;
  constructor(private route: ActivatedRoute, private router: Router, private cursoService: CursosService) { }

  ngOnInit(){
    this.idCurso = Number(this.route.snapshot.paramMap.get("id"));
    this.getCursobyid();
  }

  getCursobyid(){
    this.cursoService.getCURSObyid(this.idCurso).subscribe({
      next: Curso => {
          this.CURSO = Curso;
      },
      error: err => console.log('Error', err) 
  })
  }
  deletar(id: number){
    this.cursoService.deletarCurso(id).subscribe();
    this.router.navigate(['/home']);

  }
}
