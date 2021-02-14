import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TweetStatsService } from './../tweet-stats/tweet-stats.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tweet-stats-display',
  templateUrl: './tweet-stats-display.component.html',
  styleUrls: ['./tweet-stats-display.component.css']
})
export class TweetStatsDisplayComponent implements AfterViewInit {
  stats = new MatTableDataSource();
  displayedColumns: string[] = ['count', 'one', 'two', 'three', 'four', 'five'];

  constructor( private statSvc: TweetStatsService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.statSvc.getTweetStatsObservable()
        .subscribe( data => this.stats.data = data );
    this.stats.paginator = this.paginator;
  }
}
