import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fields } from './fields.interface';

@Injectable({
  providedIn: 'root'
})
export class TweetStatsService {
  stats: Fields[];

  constructor(private http: HttpClient) {
    this.stats = new Array();
  }

  getTweetStatsObservable(): Observable<Fields[]> {

    return new Observable((observer) => {
      setInterval(() => {
        this.http
        .get('http://localhost:3121/api/v1/tweet-stats')
        .pipe(catchError(this.handleError))
        .subscribe(ret => {
          let r = ret.topHashtags;
          let fields: Fields = {
            count: ret.count,
            one:    this.formatHashCol(r[0]),
            two:    this.formatHashCol(r[1]),
            three:  this.formatHashCol(r[2]),
            four:   this.formatHashCol(r[3]),
            five:   this.formatHashCol(r[4]),
          };
          this.stats.push(fields);
          observer.next(this.stats);
        })
      }, 5000);
    })
  }

  formatHashCol(elm) {
    let count = elm[1];
    let tag = elm[0];
    return `(${count}) ${tag}`;
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return [];
  }
}
