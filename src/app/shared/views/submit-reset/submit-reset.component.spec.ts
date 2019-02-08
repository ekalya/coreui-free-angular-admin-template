import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitResetComponent } from './submit-reset.component';

describe('SubmitResetComponent', () => {
  let component: SubmitResetComponent;
  let fixture: ComponentFixture<SubmitResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
