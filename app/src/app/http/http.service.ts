import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { TweetStat } from '../tweet-stats/fields.interface';
import { Observable, Subject } from 'rxjs';
import { webSocket } from "rxjs/webSocket";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  subject: Subject<TweetStat>;

  constructor(private http: HttpClient) {
    this.subject = webSocket("ws://localhost:8080");
  }

  getTweetStatsSockSubject(): Subject<TweetStat> {
    return this.subject;
  }

  getTweetStats(): Observable<TweetStat> {
    return this.http
        .get<TweetStat>('http://localhost:3121/api/v1/tweet-stats')
        .pipe(catchError(this.handleError))
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
