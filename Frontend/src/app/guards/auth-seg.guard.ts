import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../services/usuario/usuario.service';

@Injectable()
export class AuthSegGuard implements CanActivate {
  constructor(private us: UsuarioService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.us.getIdentidad().rolId === 1) {
      return true;
    }

    this.router.navigate(['/revision-seguimientos']);
    return false;

  }
}
