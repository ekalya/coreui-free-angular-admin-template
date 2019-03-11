import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShiftsListComponent } from './work-shifts-list.component';

describe('WorkShiftsListComponent', () => {
  let component: WorkShiftsListComponent;
  let fixture: ComponentFixture<WorkShiftsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkShiftsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkShiftsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
