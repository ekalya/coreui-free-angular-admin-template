import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentStatusDetailsComponent } from './employment-status-details.component';

describe('EmploymentStatusDetailsComponent', () => {
  let component: EmploymentStatusDetailsComponent;
  let fixture: ComponentFixture<EmploymentStatusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentStatusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentStatusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
