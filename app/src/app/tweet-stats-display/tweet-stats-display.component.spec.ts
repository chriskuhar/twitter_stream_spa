import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetStatsDisplayComponent } from './tweet-stats-display.component';

describe('TweetStatsDisplayComponent', () => {
  let component: TweetStatsDisplayComponent;
  let fixture: ComponentFixture<TweetStatsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetStatsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetStatsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
