import { Component, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  signupUser : any[] =[];
  signUpObj :any ={
    Username : '',
    email:'',
    password:''
  }
  loginObj:any={
    email:'',
    password:''
  };
  constructor(private router:Router){ }
  ngOnInit():void{
    const signupData = localStorage.getItem('signupUser');
    if(signupData !=null){
      this.signupUser =JSON.parse(signupData);
    }
  }

  Onsignup(){
    this.signupUser.push(this.signUpObj);
    localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
    this.signUpObj ={
      Username : '',
      email:'',
      password:''
    }
  }
  Onlogin(){
    const isUserExist = this.signupUser.find(m =>m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      // console.log("haiiiii")
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Wrong credentials");
    }
  }
  }
