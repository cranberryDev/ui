import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
public checkLogin(data:any){
  console.log(data,'data');
  return this.http.get<any>(environment.apiEndPoint+`/userCheck/?email=${data.email}&contact=${data.contact}`)
}
  
}
