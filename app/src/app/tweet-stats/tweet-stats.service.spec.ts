import { TestBed } from '@angular/core/testing';

import { TweetStatsService } from './tweet-stats.service';

describe('TweetStatsService', () => {
  let service: TweetStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
