import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map, catchError, tap, of, defer } from 'rxjs';
import { loadProducts, loadProductSuccess, loadProductFailure } from '../actions/product.action';
import { Iproduct } from '../../shared/interface/Iproduct';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ProductService } from '../../features/product/product-service';
@Injectable()
export class ProductEffect {
  // loadProducts$; // just declare, don’t assign yet
  constructor(
  private actions$: Actions,
  private productService: ProductService
) {
  console.log('ProductEffect created');
  console.log('Actions instance:', this.actions$);
  console.log('ProductService instance:', this.productService);
  // this.loadProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadProducts),
  //     mergeMap(() =>
  //       this.productService.getProducts().pipe(
  //         map((response) => {
  //           console.log('✅ Product response', response);
  //           const product: Iproduct[] = response.map((item: any) => ({
  //             id: item.id,
  //             name: item.title
  //           }));
  //           return loadProductSuccess({ product });
  //         }),
  //         catchError((error) => of(loadProductFailure({ error })))
  //       )
  //     )
  //   )
  // );

}

loadProducts$ = createEffect(() =>
  defer(() => 
    this.actions$.pipe(
      ofType(loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((response: any[]) => {
            const product = response.map(item => ({ id: item.id, name: item.title }));
            return loadProductSuccess({ product });
          }),
          catchError((error) => of(loadProductFailure({ error })))
        )
      )
    )
  )
);

  /** ✅ Correct placement — outside any lifecycle method */
  
}
