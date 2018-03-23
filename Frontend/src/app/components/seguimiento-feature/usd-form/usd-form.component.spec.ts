import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdFormComponent } from './usd-form.component';

describe('UsdFormComponent', () => {
  let component: UsdFormComponent;
  let fixture: ComponentFixture<UsdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
