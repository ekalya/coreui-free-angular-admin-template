import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDynamicPlusComponent } from './test-dynamic-plus.component';

describe('TestDynamicPlusComponent', () => {
  let component: TestDynamicPlusComponent;
  let fixture: ComponentFixture<TestDynamicPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDynamicPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDynamicPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
