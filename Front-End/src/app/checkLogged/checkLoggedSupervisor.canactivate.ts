import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class CheckLoggedSupervisor implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {

        if (localStorage.getItem('usuario') == "4") {
            return true;
        } else {
            if(localStorage.getItem('usuario') == "2" || localStorage.getItem('usuario') == "3") {
                this.router.navigate(['/atendente/']);
            } else {
                this.router.navigate(['/professor/']);
            }
            return true;
        }
    }
}

export default CheckLoggedSupervisor;