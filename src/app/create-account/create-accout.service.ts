import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateAccoutService {

  constructor(private http:HttpClient) { }

  public registerUser(data:any){
    console.log(data,'name')
    // let sendBody={name:data.checkoutForm.value.name,email:data.checkoutForm.value.email,contact:data.checkoutForm.value.Contact,password:data.checkoutForm.value.password}
    return this.http.post<any>(environment.apiEndPoint+'/createUsers',data)
  }

  public getUserDetails(){
    return this.http.get<any>(environment.apiEndPoint+'/getUsers')
  }

  // public checkDuplicacy(data:any=[]){
  //   console.log(data, 'data in service file');
    
  // return this.http.get<any>(environment.apiEndPoint+'/duplicacyCheck',data)
  // }

  // public removeUser(id:number){
  //   return this.http.delete<any>(environment.apiEndPoint+'/deleteUsers/:id',id)
  // }



  }
