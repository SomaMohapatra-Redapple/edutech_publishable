import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  paymentHandler: any = null;

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
