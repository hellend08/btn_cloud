import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitularDetailComponent } from './titular-detail.component';

describe('TitularDetailComponent', () => {
  let component: TitularDetailComponent;
  let fixture: ComponentFixture<TitularDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitularDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitularDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
