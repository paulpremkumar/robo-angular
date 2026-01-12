import { createReducer,on } from "@ngrx/store";
import { loadProducts,loadProductFailure,loadProductSuccess } from "../actions/product.action";
import { Iproduct } from "../../shared/interface/Iproduct";
export interface IinitialProductState{
    loading:boolean;
    product:Iproduct[],
    error:""
}
const initialProductState:IinitialProductState={
    loading:false,product:[],error:""
};
export const productReducer=createReducer(initialProductState,
    on(loadProductSuccess,(state,{product})=>({...state,product,loading:false})),
      on(loadProductFailure,(state,{error})=>({...state,error,loading:false})),
      on(loadProducts,(state)=>({...state,loading:true}))
)

