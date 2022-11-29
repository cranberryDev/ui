import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HomeService } from './home.service';

declare var Razorpay:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  submitted=false;
  loading=false;
  razorPayData: any;

  constructor(private enroll:HomeService) { }

  ngOnInit(): void {
  }
  razorPayOptions={
    "key":'',
    "amount":'1',
    "currency":'INR',
    "name":'',
    "description":"The Missing Spoon",
    "order_id":'',
    "handler":(res: any)=>{
      console.log(res);
    }
  };

  buyRazorPay(){
    this.submitted=true;
    this.loading=true;
    this.razorPayData={amount:100}
    
    this.enroll.triggerOrder(this.razorPayData).subscribe((res)=>{
      this.razorPayOptions.key=res['key'];
      this.razorPayOptions.amount=res['value']['amount'];
      this.razorPayOptions.description=res['description'];
      this.razorPayOptions.order_id=res['value']['id'];
      this.razorPayOptions.handler=this.razorPayResponseHandler 
      var rzp1=new Razorpay(this.razorPayOptions);
      rzp1.open();
      console.log('Opened');
    })
  }

  razorPayResponseHandler(response: any){
    console.log(response);
    
  }

}
