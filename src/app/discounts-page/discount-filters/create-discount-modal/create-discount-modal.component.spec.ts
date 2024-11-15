import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiscountModalComponent } from './create-discount-modal.component';

describe('CreateDiscountModalComponent', () => {
  let component: CreateDiscountModalComponent;
  let fixture: ComponentFixture<CreateDiscountModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDiscountModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDiscountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
