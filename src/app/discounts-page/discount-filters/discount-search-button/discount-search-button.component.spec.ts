import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountSearchButtonComponent } from './discount-search-button.component';

describe('DiscountSearchButtonComponent', () => {
  let component: DiscountSearchButtonComponent;
  let fixture: ComponentFixture<DiscountSearchButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountSearchButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountSearchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
