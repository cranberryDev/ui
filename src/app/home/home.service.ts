import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  public triggerOrder(dataOrder:number){
    console.log(dataOrder,'order data in service file');
    return this.http.post<any>(environment.apiEndPoint+'/pay',dataOrder);
    }
}
