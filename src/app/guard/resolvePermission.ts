import {Resolve} from '@angular/router';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

export class ResolvePermission implements Resolve<HeroDetailComponent> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.paramMap.get('id');
    if ([11, 12, 13, 15, 16].includes(Number(id))) {
      alert('3q very much');
    }
    if (Number(id) === 14) {
      alert('3q and sorry for he, I feel very sad now');
    }
    return HeroDetailComponent;
  }
}
