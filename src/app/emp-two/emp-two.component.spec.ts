import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTwoComponent } from './emp-two.component';

describe('EmpTwoComponent', () => {
  let component: EmpTwoComponent;
  let fixture: ComponentFixture<EmpTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
