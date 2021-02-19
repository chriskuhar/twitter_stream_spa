import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './../http/http.service';
import { TweetStat } from './fields.interface';

@Injectable({
  providedIn: 'root'
})
export class TweetStatsService {

  constructor(private http: HttpService) {}

  getTweetStatsObservable(): Observable<TweetStat> {

    return new Observable((observer) => {
      setInterval(() => {
        this.http.getTweetStats()
        .subscribe(ret => {
          observer.next(ret);
        })
      }, 5000);
    })
  }
}
