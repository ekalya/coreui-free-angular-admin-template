import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGradeDetailComponent } from './pay-grade-detail.component';

describe('PayGradeDetailComponent', () => {
  let component: PayGradeDetailComponent;
  let fixture: ComponentFixture<PayGradeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayGradeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayGradeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
