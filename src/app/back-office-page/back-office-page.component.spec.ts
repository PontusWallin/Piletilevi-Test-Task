import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfficePageComponent } from './back-office-page.component';

describe('BackOfficePageComponent', () => {
  let component: BackOfficePageComponent;
  let fixture: ComponentFixture<BackOfficePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackOfficePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackOfficePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
