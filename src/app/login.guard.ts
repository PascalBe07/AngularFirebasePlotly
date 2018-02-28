import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AngularFireAuth} from "angularfire2/auth";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private authService: AngularFireAuth, private router: Router){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // return true;
    return this.authService.authState.map(user => user !== null)
      .do(result => {
        if (!result)
          this.router.navigate(["/login"]);
      });
  }
}
