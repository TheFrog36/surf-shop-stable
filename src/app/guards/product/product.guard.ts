import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {

  constructor(private prodServ: ProductService, private router: Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = route.paramMap.get('id')
    if(id){
      return this.prodServ.getProductById(id).pipe(
        map(res => true),
        catchError(err =>{
          this.router.navigate(['/products']);
          return of(false)
        })
      ) as Observable<boolean>
    } else {
      this.router.navigate(['/products'])
      return false
    }
  }

}
