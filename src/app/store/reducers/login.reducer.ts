import { createReducer,on } from "@ngrx/store";

import * as LoginAction from "../actions/login.action";
export interface IloginData{
    accessToken:string;
    email:string;
    firstName:string;
    gender:string;
    id:number;
    image:string;
    lastName:string;
    refreshToken:string;
    username:string;
}
export interface IloginInitialState{
    message:string;
    isLogin:boolean;
    loginData:IloginData | {}
}
export const initialState:IloginInitialState={
    message:'',
    isLogin:false,
    loginData:{}
}
export const loginReducer=createReducer(initialState,
    on(LoginAction.setLoginData,(state,{message,isLogin,loginData})=>({...state,message:message,isLogin:isLogin,loginData:loginData})),
  
)