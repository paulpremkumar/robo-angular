import { filter, first, map, Observable, tap } from "rxjs";
import { loadProducts } from "../../store/actions/product.action";
import { selectAllProduct } from "../../store/selectors/product.selector";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store } from "@ngrx/store";

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<boolean> {
  constructor(private store: Store) {}

  resolve(): Observable<boolean> {
    return this.store.select(selectAllProduct).pipe(
      tap(products => {
        // If array empty, trigger load
        if (!products || products?.length === 0) {
          this.store.dispatch(loadProducts());
        }
      }),
      // map array → boolean
      map(products => !!products && products?.length > 0),

      // Wait until boolean is true
      filter(loaded => loaded === true),
      first()
    );
  }
}
