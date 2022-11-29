import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgModel } from '@angular/forms';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { LoginService } from './login.service';
import { AbstractControl, FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;
  loginForm: FormGroup
  loginArr = [];
  checkErrorMessage: any;

  constructor(public dialog: MatDialog, public authService: SocialAuthService, 
    private userCheck: LoginService, public formBuilder: FormBuilder,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      contact: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  performUserCheck(objUser: any) {
    console.log(objUser, 'inside check function');
    return objUser;
  }

  onSubmit() {
    console.log(this.loginForm.value, 'login Form');
    this.userCheck.checkLogin(this.loginForm.value).subscribe((res) => {
      console.log(res,'response from backend');
      if(res='User Found'){
        this.router.navigateByUrl('/')
      }
      else{
        
      }
    })
    }
  // this.userCheck.checkLogin().subscribe((userDataArray)=>{
  // console.log(userDataArray,'tbl userdata')



signInWithGoogle() {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
}
}
