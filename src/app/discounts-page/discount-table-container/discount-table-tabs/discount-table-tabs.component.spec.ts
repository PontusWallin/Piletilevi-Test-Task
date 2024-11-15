import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountTableTabsComponent } from './discount-table-tabs.component';

describe('DiscountTableTabsComponent', () => {
  let component: DiscountTableTabsComponent;
  let fixture: ComponentFixture<DiscountTableTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountTableTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountTableTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
