import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {

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
