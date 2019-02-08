import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveActionComponent } from './save-action.component';

describe('SaveActionComponent', () => {
  let component: SaveActionComponent;
  let fixture: ComponentFixture<SaveActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
