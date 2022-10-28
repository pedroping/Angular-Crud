import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/curso';
import { ActivatedRoute } from '@angular/router';
import { Router, Route } from '@angular/router';
import { CursosService } from 'src/app/servicos/cursos.service';
import { FormGroup,  FormControl } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  idCurso!: number; 
  CURSO!: Curso;
  cursoForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private cursoService: CursosService) { 
  }

  ngOnInit(): void {
    this.idCurso = Number(this.route.snapshot.paramMap.get("id"));
    this.getCursobyid();
  }

  salvar(): void{
    this.cursoService.editarCurso(this.CURSO, this.idCurso).subscribe();
    this.router.navigate(['/home']);
  }

  getCursobyid(){
    this.cursoService.getCURSObyid(this.idCurso).subscribe({
      next: Curso => {
          this.CURSO = Curso;
          this.setForm();
      },
      error: err => console.log('Error', err) 
  })
  }

  setForm(){
    this.cursoForm = new FormGroup({
      id: new FormControl(this.CURSO.id),
      nome: new FormControl(this.CURSO.nome),
      price: new FormControl(this.CURSO.price),
      code: new FormControl(this.CURSO.code),
      duracao: new FormControl(this.CURSO.duracao),
      rating: new FormControl(this.CURSO.rating),
      descricao: new FormControl(this.CURSO.descricao),
      releaseDate: new FormControl(this.CURSO.releaseDate),
      imageUrl: new FormControl(this.CURSO.imageUrl)
    })
  }
  submit(){
    console.log(this.cursoForm.value);
    this.cursoService.editarCurso(this.cursoForm.value,  this.idCurso).subscribe();
    this.router.navigate(['/home']);  
  }

}
