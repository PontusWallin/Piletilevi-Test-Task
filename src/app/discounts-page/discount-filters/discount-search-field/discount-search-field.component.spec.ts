import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountSearchFieldComponent } from './discount-search-field.component';

describe('DiscountSearchFieldComponent', () => {
  let component: DiscountSearchFieldComponent;
  let fixture: ComponentFixture<DiscountSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountSearchFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
