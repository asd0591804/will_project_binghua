import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleDataService } from '../articlesData.service';
import { Article } from './article.interface';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, ArticleBodyComponent, ArticleHeaderComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  articles: Article[] = [];
  articleService = inject(ArticleDataService)

  ngOnInit() {
    this.articleService.getData().subscribe(result => {
      this.articles = result;
    });
  }

  onDelete(id: number) {
    this.articles = this.articles.filter((a: Article) => {
      return a.id !== id;
    })
    this.articleService.delete(id).subscribe(result => { }, error => console.log(error));
  }

  onChangeTheTitle(articleNew:{id:number,title:string}) {
    this.articles = this.articles.map((article:Article) => {
      if (article.id = articleNew.id) {

        return Object.assign({}, article, articleNew);
      }
      return article;
    })
    this.articleService.changeTitle(articleNew).subscribe(result => { }, error => console.log(error));
  }

}
