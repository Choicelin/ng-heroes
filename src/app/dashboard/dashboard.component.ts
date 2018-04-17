import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {ActivatedRoute, Params} from '@angular/router';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  test: string = '';
  isPro: boolean = false;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes.slice(0, 7));
  }

  ngOnInit() {
    this.getHeroes();
    // this.test = this.route.snapshot.queryParamMap.get('test'); // 如果没有自己跳转到自己的情况用这个
    this.route.queryParams.subscribe((params: Params) => { // 否则用这个，因为ngOnInit只调用一次
      this.test = params.id;
    });
    this.isPro = this.route.snapshot.data[0].isPro;
  }
}
