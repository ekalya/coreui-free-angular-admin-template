import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login.ContainerComponent } from './login.container.component';

describe('Login.ContainerComponent', () => {
  let component: Login.ContainerComponent;
  let fixture: ComponentFixture<Login.ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login.ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login.ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
