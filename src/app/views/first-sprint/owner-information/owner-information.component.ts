import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-owner-information',
  templateUrl: './owner-information.component.html',
  styleUrls: ['./owner-information.component.scss']
})
export class OwnerInformationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [ '', [Validators.compose([Validators.required, Validators.pattern('[A -Za-z0-9]*')]), Validators.minLength(2)]],
      surname: [ '', [Validators.compose([Validators.required, Validators.pattern('[A -Za-z0-9]*')]), Validators.minLength(2)]],
      doc: [ '', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })
  }

}
