import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Article } from '../article.interface';

@Component({
  selector: 'app-article-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit{
  @Input()
  articles: Article = {} as Article;

  @Output()
  delete = new EventEmitter<number>();

  @Output()
  changeTitle = new EventEmitter<{id: number, title: string}>();

  isEdit = false;

  //暫存目前conponent狀態
  newTitle = '';

  onDeleteArtical(){
    this.delete.emit(this.articles.id)
  }

  onEdit(title:string){
    this.newTitle = title
    this.changeTitle.emit({id:this.articles.id,title:title})

  }

  ngOnInit(){

    this.newTitle=this.articles.title;
  }

}
