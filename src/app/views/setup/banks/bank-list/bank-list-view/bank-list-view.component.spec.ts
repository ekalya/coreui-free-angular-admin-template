import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankListViewComponent } from './bank-list-view.component';

describe('BankListViewComponent', () => {
  let component: BankListViewComponent;
  let fixture: ComponentFixture<BankListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
