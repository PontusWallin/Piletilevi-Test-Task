import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountTablePaginatorComponent } from './discount-table-paginator.component';

describe('DiscountTablePaginatorComponent', () => {
  let component: DiscountTablePaginatorComponent;
  let fixture: ComponentFixture<DiscountTablePaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountTablePaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountTablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
