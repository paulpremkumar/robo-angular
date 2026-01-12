import { createAction,props } from "@ngrx/store";
import { Iproduct } from "../../shared/interface/Iproduct";
export const loadProducts=createAction("[Product] Load products");
export const loadProductSuccess=createAction("[Product] Load product success",props<{product:Iproduct[]}>());
export const loadProductFailure=createAction("[Product] Load product failure",props<{error:any}>());
