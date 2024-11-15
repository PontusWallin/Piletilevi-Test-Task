import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountTypeDropdownComponent } from './discount-type-dropdown.component';

describe('DiscountTypeDropdownComponent', () => {
  let component: DiscountTypeDropdownComponent;
  let fixture: ComponentFixture<DiscountTypeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountTypeDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountTypeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
