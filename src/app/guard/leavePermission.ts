import {CanDeactivate} from '@angular/router';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

export class LeavePermission implements CanDeactivate<HeroDetailComponent>{
  canDeactivate(component: HeroDetailComponent) {
    if (component.isFocus()) {
      return true;
    } else {
      alert('不点赞就想跑吗');
    }
  }

}
