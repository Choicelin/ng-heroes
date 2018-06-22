import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {Page404Component} from './page404/page404.component';
import {ChildrenTestComponent} from './children-test/children-test.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {Permission} from './guard/permission';
import {LeavePermission} from './guard/leavePermission';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  // {path: 'xx', redirectTo:'dashboard', pathMatch: 'prefix'},
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent, data: [{isPro: true}]},
  {path: 'feed', component: FeedbackComponent, outlet: 'feedback'},
  {
    path: 'detail/:id', component: HeroDetailComponent, children: [
      {path: 'hidehero', component: ChildrenTestComponent}
    ],
    canActivate: [Permission],
    canDeactivate: [LeavePermission]
  },
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


