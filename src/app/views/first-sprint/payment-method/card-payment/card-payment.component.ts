import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.scss']
})
export class CardPaymentComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      card: [ '', [Validators.compose([Validators.required, Validators.pattern('[0-9]*')]), Validators.minLength(17)]],
      cvv: [ '', [Validators.compose([Validators.required, Validators.pattern('[0-9]*')]), Validators.minLength(3)]],
      date: [ '', [Validators.compose([Validators.required, Validators.pattern('[0-9]*')]), Validators.minLength(10)]],
      share: [ '', [Validators.compose([Validators.required, Validators.pattern('[0-9]*')]), Validators.minLength(2)]],
    })
  }

}
