import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TweetStatsService } from './../tweet-stats/tweet-stats.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { Fields, TweetStat } from '../tweet-stats/fields.interface';

@Component({
  selector: 'app-tweet-stats-display',
  templateUrl: './tweet-stats-display.component.html',
  styleUrls: ['./tweet-stats-display.component.css']
})
export class TweetStatsDisplayComponent implements AfterViewInit {
  stats = new MatTableDataSource();
  displayedColumns: string[] = ['count', 'one', 'two', 'three', 'four', 'five'];
  fields: Fields[];

  constructor( private statSvc: TweetStatsService) {
    this.fields = new Array();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.statSvc.getTweetStatsObservable()
      .pipe(
         map(ret => {

          let r = ret.topHashtags;
          let fields: Fields = {
            count: ret.count,
            one:    this.formatHashCol(r[0]),
            two:    this.formatHashCol(r[1]),
            three:  this.formatHashCol(r[2]),
            four:   this.formatHashCol(r[3]),
            five:   this.formatHashCol(r[4]),
          };
          return fields;
        })
      )
        .subscribe( data => {
          this.fields.push(data);
          this.stats.data = this.fields;
        });


    this.stats.paginator = this.paginator;
  }

  formatHashCol(elm) {
    let count = elm[1];
    let tag = elm[0];
    return `(${count}) ${tag}`;
  }

}
