import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLoggedAtendente implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (localStorage.getItem('usuario') == "2") {
            return true;
        } else {
            if(localStorage.getItem('usuario') == "1") {
                this.router.navigate(['/professor/']);
            } else {
                this.router.navigate(['/supervisor/']);
            }
            return true;
        }
    }
}

export default CheckLoggedAtendente;