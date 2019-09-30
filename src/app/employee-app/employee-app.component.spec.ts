import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAppComponent } from './employee-app.component';

describe('EmployeeAppComponent', () => {
  let component: EmployeeAppComponent;
  let fixture: ComponentFixture<EmployeeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
