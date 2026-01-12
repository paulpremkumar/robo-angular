import {
  createAction,
  createFeatureSelector,
  createSelector,
  props
} from "./chunk-UEDKRKWX.js";

// src/app/store/actions/product.action.ts
var loadProducts = createAction("[Product] Load products");
var loadProductSuccess = createAction("[Product] Load product success", props());
var loadProductFailure = createAction("[Product] Load product failure", props());

// src/app/store/selectors/product.selector.ts
var selectProductState = createFeatureSelector("product");
var selectAllProduct = createSelector(selectProductState, (state) => state.product);

export {
  loadProducts,
  loadProductSuccess,
  loadProductFailure,
  selectAllProduct
};
//# sourceMappingURL=chunk-IFVXIMNH.js.map
