import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiscountButtonComponent } from './create-discount-button.component';

describe('CreateDiscountButtonComponent', () => {
  let component: CreateDiscountButtonComponent;
  let fixture: ComponentFixture<CreateDiscountButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDiscountButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDiscountButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
