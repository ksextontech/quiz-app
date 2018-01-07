import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CanComponentDeactivate } from './can-component-deactivate';

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
     nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      // move logic into the component that implements the "CanComponentDeactivate" interface
      return component.canDeactivate();
  }
}
