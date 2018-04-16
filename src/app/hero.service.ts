import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import {Hero} from './hero';
import {MessageService} from './message.service';

const httpsOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add('英雄之魂: ' + message);
  }

  handleError<T>(operation = '操作', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation}失败了，${error.message}`);
      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`英雄抵达`)),
        catchError(this.handleError('召唤英雄队伍', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`选择英雄${id}`)),
        catchError(this.handleError<Hero>(`召唤英雄${id}`))
      );
  }

  updateHero(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, httpsOptions)
      .pipe(
        tap(_ => this.log(`更新英雄${hero.id}信息`)),
        catchError(this.handleError<any>('更新英雄${id}'))
      );
  }

  addHero(hero: Hero): Observable<any> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpsOptions)
      .pipe(
        tap((hero: Hero) => this.log(`添加英雄${hero.id}`)),
        catchError(this.handleError<Hero>('添加英雄'))
      );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpsOptions).pipe(
      tap(_ => this.log('删除英雄${id}')),
      catchError(this.handleError<Hero>('删除英雄'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log('搜寻英雄')),
      catchError(this.handleError<Hero[]>('搜寻英雄'))
    );
  }
}
