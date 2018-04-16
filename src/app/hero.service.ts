import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('英雄来了!');
    return of(HEROES);
  }

  getHero(id): Observable<Hero> {
    this.messageService.add(`选择英雄${id}`);
    return of(HEROES.find((hero) => id === hero.id))
  }
}
