import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalitiesListComponent } from './nationalities-list.component';

describe('NationalitiesListComponent', () => {
  let component: NationalitiesListComponent;
  let fixture: ComponentFixture<NationalitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
