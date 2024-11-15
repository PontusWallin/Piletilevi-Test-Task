import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountTableContainerComponent } from './discount-table-container.component';

describe('DiscountTableContainerComponent', () => {
  let component: DiscountTableContainerComponent;
  let fixture: ComponentFixture<DiscountTableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountTableContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
