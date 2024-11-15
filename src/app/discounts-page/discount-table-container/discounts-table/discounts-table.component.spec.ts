import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsTableComponent } from './discounts-table.component';

describe('DiscountsTableComponent', () => {
  let component: DiscountsTableComponent;
  let fixture: ComponentFixture<DiscountsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
