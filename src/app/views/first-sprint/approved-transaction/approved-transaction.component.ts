import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approved-transaction',
  templateUrl: './approved-transaction.component.html',
  styleUrls: ['./approved-transaction.component.scss']
})
export class ApprovedTransactionComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
