import {createAction,props} from "@ngrx/store";
export const setLoginData=createAction('[login] loginData',
    props<{message:string,isLogin:boolean,loginData:any}>()
);
