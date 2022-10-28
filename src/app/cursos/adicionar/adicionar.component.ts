import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { CursosService } from 'src/app/servicos/cursos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  cursoForm!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private cursoService: CursosService) { }

  ngOnInit(): void {
    this.cursoForm = new FormGroup({
      nome: new FormControl(''),
      price: new FormControl(''),
      code: new FormControl(''),
      duracao: new FormControl(''),
      rating: new FormControl(''),
      descricao: new FormControl(''),
      releaseDate: new FormControl(''),
      imageUrl: new FormControl('../../assets/Teste.jpg')
    })
  }

  submit(){
    console.log(this.cursoForm.value);  
    this.cursoService.adicionarCurso(this.cursoForm.value).subscribe();
    this.router.navigate(['/home']);
  }

}
