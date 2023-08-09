import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {
  articles :Article[] = [];
  constructor(private http:HttpClient) {
  }
  delete(id: number){
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }
  updateTitle(article:{id: number, title: string}){
    return this.http.put(`http://localhost:3000/articles/${article.title}`,article);
  }

  getData() : Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

}
