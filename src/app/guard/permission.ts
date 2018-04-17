import {CanActivate} from '@angular/router';

export class Permission implements CanActivate {
  canActivate() {
    const hasPermission: boolean = Math.random() < 0.5;
    if (!hasPermission) {
      alert('运气不好，英雄召唤失败');
      return false;
    }
    return true; // true路由请求被通过
  }
  
}
