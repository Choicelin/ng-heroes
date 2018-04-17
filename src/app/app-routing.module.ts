import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {Page404Component} from './page404/page404.component';
import {ChildrenTestComponent} from './children-test/children-test.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {path: 'xx', redirectTo:'dashboard', pathMatch: 'prefix'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent, data: [{isPro: true}]},
  {
    path: 'detail/:id', component: HeroDetailComponent, children: [
      { path: 'hidehero', component: ChildrenTestComponent}
    ]
  },
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


