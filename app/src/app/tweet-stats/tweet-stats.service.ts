import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fields, SvcRes, TopHashTags } from './fields.interface';
import { HttpService } from './../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TweetStatsService {
  stats: Fields[];

  constructor(private http: HttpService) {
    this.stats = new Array();
  }

  getTweetStatsObservable(): Observable<Fields[]> {

    return new Observable((observer) => {
      setInterval(() => {
        this.http.getTweetStats()
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

}
