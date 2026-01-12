import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IinitialProductState} from "../reducers/product.reducer";

export const selectProductState=createFeatureSelector<IinitialProductState>('product');
export const selectAllProduct=createSelector(selectProductState,(state)=>state.product);
export const selectProductById=(productId:number)=>createSelector(selectAllProduct,
    (products)=>products.find(product =>product.id===productId)
)