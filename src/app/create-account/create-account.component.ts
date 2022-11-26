import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { CreateAccoutService } from './create-accout.service';
import {AbstractControl, FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { NgModel } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;
  loggedInUserFirstName:any;
  formData:any
  sendData: any;
  checkoutForm:FormGroup;
  collegeList:any=[
  'Babu Banarasi Das University',
  'City Group Of Colleges',
  'Goel Group Of Institutions',
  'Isabella Thoburn College (Professional Studie',
  'Maa Vaishno Devi Law College',
  'Rajat Girls Degree College',
  'Saraswati Dental College',
  'Sherwood College Of Management',
  'Shri Ramswaroop Memorial College of Engineering & Management',
  'Sri Ayodhya Singh Memo. Inter College']
  courseList:any=['B.Tech','MBA']
listCourse:any;
listCollege: any;
submitted=false;
  


  constructor(public authService:SocialAuthService, 
    public createAccountUser:CreateAccoutService,
    public formBuilder:FormBuilder,private router:Router) {
      this.checkoutForm=this.formBuilder.group({
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        contact:['',Validators.required],
        password:['',Validators.required],
        institute:[''],
        course:[''],
        roll_no:['',Validators.required]
      })
     }

  ngOnInit():any {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.checkoutForm.controls;
  }


  onSubmit(){
  this.submitted=true;
  this.sendData={...this.checkoutForm.value}
  console.log(this.checkoutForm.value,'checkout form');
  this.createAccountUser.registerUser(this.sendData).subscribe((res)=>{
  
  })
  this.checkoutForm.reset();
  this.router.navigateByUrl('/')
}
  
//  fetchDetails(){
//   this.createAccountUser.getUserDetails().subscribe((formData)=>{
//   console.log(formData,'data');
//   })
//  }

//  deleteUsers(){
//   this.createAccountUser.removeUser(this.checkoutForm.value.password);
//  }
 
}
