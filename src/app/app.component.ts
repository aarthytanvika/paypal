import { Component } from '@angular/core';
import{ render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){
   
  render( 
    {
      id: "#paypal-button-container",
      value: "100.00",
      currency: "USD",
      onApprove: (details) =>{
        alert("Transaction Successfull");
      }
    }
  );
      
  }
  title='upi';
  }
  
  