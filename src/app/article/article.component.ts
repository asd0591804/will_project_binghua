import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleDataService } from './articles-data.service';
import { Article } from './article.interface';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgFor,ArticleBodyComponent, ArticleHeaderComponent],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  articles: Article[] = [];
  articleService = inject(ArticleDataService)

  ngOnInit() {
    this.articleService.getData().subscribe(a => this.articles = a);
  }

  onDelete(id: number) {
    this.articles = this.articles.filter((a: Article) =>  a.id !== id);
    this.articleService.delete(id).subscribe(a => { }, error => console.log(error));
  }

  onUpdateTitle(articleNew:{id:number,title:string}) {
    this.articles = this.articles.map((article:Article) => {
      if (article.id === articleNew.id) {
        return Object.assign({}, article, articleNew);
      }
      return article;
    })
    this.articleService.updataTitle(articleNew).subscribe(a => { }, error => console.log(error));
  }

}
