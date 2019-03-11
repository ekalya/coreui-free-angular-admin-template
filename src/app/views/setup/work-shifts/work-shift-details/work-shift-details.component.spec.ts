import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShiftDetailsComponent } from './work-shift-details.component';

describe('WorkShiftDetailsComponent', () => {
  let component: WorkShiftDetailsComponent;
  let fixture: ComponentFixture<WorkShiftDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkShiftDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShiftDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
