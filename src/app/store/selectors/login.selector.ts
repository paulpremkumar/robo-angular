import { createSelector } from "@ngrx/store";
import { IloginInitialState } from "../reducers/login.reducer";
export interface AppState{
    login:IloginInitialState
} 
export const selectLogin=(state:AppState)=>state.login;
export const selectLoginData=createSelector(selectLogin,(state:IloginInitialState)=>state.loginData)