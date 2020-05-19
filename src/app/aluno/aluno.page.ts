import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alunos } from './aluno.interface';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {
  private API_URL = 'https://unidesc-api.herokuapp.com/v1/api';
  public alunos: Array<object>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAlunos();
  }

  getAlunos(): void {
    this.http.get(`${this.API_URL}/alunos`).subscribe(({ alunos }: Alunos) => {
      this.alunos = alunos;
    });
  }
}
