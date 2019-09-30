import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpOneComponent } from './emp-one.component';

describe('EmpOneComponent', () => {
  let component: EmpOneComponent;
  let fixture: ComponentFixture<EmpOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
