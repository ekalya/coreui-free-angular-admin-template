import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayGradesListComponent } from './pay-grades-list.component';

describe('PayGradesListComponent', () => {
  let component: PayGradesListComponent;
  let fixture: ComponentFixture<PayGradesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayGradesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayGradesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
