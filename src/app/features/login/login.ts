import { Component, signal } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../../shared/toaster/toaster-service';
import { LoginService } from './login-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { KeyValuePipe } from '@angular/common';
import { Store, select } from '@ngrx/store';
import * as LoginAction from "../../store/actions/login.action";
import { selectLoginData } from '../../store/selectors/login.selector';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,KeyValuePipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone:true,
  providers:[KeyValuePipe]
})
export class Login {
  loginForm!:FormGroup;
   loginSignal = signal({}); 
constructor(private fb:FormBuilder,private toast:ToasterService,
  private loginService:LoginService,private store:Store<{login:{message:'',isLogin:false,loginData:{}}}>){
  this.store.select(selectLoginData).subscribe(data => {
    console.log(data,"data");
      this.loginSignal.set(data);
    });

    this.createForm();
    localStorage.setItem("token","sfgdsgfsdfdsfghdfgdhgffgfhgfhsj");
}
createForm(){
  this.loginForm=this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })
}
onSubmit(){
  const loginFormValue=this.loginForm.value;
  if(loginFormValue.username===''){
    this.toast.show("Please enter username","success");
  }else if(loginFormValue.password===''){
     alert("Please enter password");
  }else{
     this.loginService.loginUser({...loginFormValue,expiresInMins:30}).subscribe((response:any)=>{
    //   this.loginSignal.set(response);
       this.store.dispatch(LoginAction.setLoginData({
    message: 'Login successfully',
    isLogin: true,
    loginData: response  // your API response
  }));
 // console.log(response,"response");
        console.log( this.loginSignal()," this.loginSignal");
     });
    ``
    

  }
}
}
