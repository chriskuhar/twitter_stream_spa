import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TweetStatsDisplayComponent } from './tweet-stats-display/tweet-stats-display.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'stats',
    pathMatch: 'full'
  },
  {
    path: 'stats',
    component: TweetStatsDisplayComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TweetStatsDisplayComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
