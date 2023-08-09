import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../article.interface';

@Component({
  selector: 'app-article-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.scss']
})
export class ArticleBodyComponent implements OnInit, OnChanges{
  @Input()
  articles: Article = {} as Article;

  constructor(){
    console.log("ArticalBodyComponent : constructor")

  }

  ngOnInit(): void {
    console.log("ArticalBodyComponent : ngOnInit")

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ArticalBodyComponent : ngOnChanges")

  }
}
