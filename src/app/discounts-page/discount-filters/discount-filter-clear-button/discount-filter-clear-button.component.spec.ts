import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountFilterClearButtonComponent } from './discount-filter-clear-button.component';

describe('DiscountFilterClearButtonComponent', () => {
  let component: DiscountFilterClearButtonComponent;
  let fixture: ComponentFixture<DiscountFilterClearButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountFilterClearButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountFilterClearButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
