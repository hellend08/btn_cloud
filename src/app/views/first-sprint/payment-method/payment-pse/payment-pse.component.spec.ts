import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPseComponent } from './payment-pse.component';

describe('PaymentPseComponent', () => {
  let component: PaymentPseComponent;
  let fixture: ComponentFixture<PaymentPseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentPseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentPseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
