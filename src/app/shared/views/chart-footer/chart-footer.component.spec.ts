import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFooterComponent } from './chart-footer.component';

describe('ChartFooterComponent', () => {
  let component: ChartFooterComponent;
  let fixture: ComponentFixture<ChartFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
