import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalityDetailsComponent } from './nationality-details.component';

describe('NationalityDetailsComponent', () => {
  let component: NationalityDetailsComponent;
  let fixture: ComponentFixture<NationalityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
