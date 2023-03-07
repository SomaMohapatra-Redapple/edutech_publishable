import { Component } from '@angular/core';
import { CheckoutService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  paymentHandler: any = null;

  success: boolean = false
  
  failure:boolean = false

  constructor(private checkout: CheckoutService) {}

  ngOnInit(){
    this.invokeStripe();
  }

  makePayment(amount : number){

    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_F5UFRy9rcym7iLRTtaH55jGu',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
      },
    });
    
    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
      });
    };
 
    paymentHandler.open({
      name: 'Red Apple',
      description: 'you are going to make a payment',
      amount: amount * 100,
    });

  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_F5UFRy9rcym7iLRTtaH55jGu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
 
      window.document.body.appendChild(script);
    }
  }

}
