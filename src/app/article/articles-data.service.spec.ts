import { TestBed } from '@angular/core/testing';

import { ArticleDataService } from './articles-data.service';

describe('DataService', () => {
  let service: ArticleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
