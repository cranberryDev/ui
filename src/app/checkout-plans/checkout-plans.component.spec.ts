import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPlansComponent } from './checkout-plans.component';

describe('CheckoutPlansComponent', () => {
  let component: CheckoutPlansComponent;
  let fixture: ComponentFixture<CheckoutPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
