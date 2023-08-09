import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Article } from '../article.interface';

@Component({
  selector: 'app-article-body',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.scss']
})
export class ArticleBodyComponent{
  @Input()
  articles: Article = {} as Article;
}
