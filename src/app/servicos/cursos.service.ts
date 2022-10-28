import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../curso';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  Url: string = "http://localhost:3100/api/courses"
  constructor(private httpClient: HttpClient) { }

  getCURSOS(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.Url);    
  }

  getCURSObyid(id: number): Observable<Curso>{
    return this.httpClient.get<Curso>(`${this.Url}/${id}`);  
  }

  editarCurso(CURSO: Curso, id: number): Observable<Curso>{
    return this.httpClient.put<Curso>(`${this.Url}/${id}`, CURSO);
  }

  deletarCurso(id: number): Observable<Curso>{
    return this.httpClient.delete<Curso>(`${this.Url}/${id}`)
  }

  adicionarCurso(CURSO: Curso){
    return this.httpClient.post(this.Url, CURSO);
  }
}


