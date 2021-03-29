import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [ '', [Validators.compose([Validators.required, Validators.pattern('[A -Za-z0-9]*')]), Validators.minLength(2)]],
      surname: [ '', [Validators.compose([Validators.required, Validators.pattern('[A -Za-z0-9]*')]), Validators.minLength(2)]],
      doc: [ '', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })
  }

  // getNexView(ruta: string){
  //   this.ruta.url('')
  // }

}
