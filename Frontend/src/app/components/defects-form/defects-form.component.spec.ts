import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectsFormComponent } from './defects-form.component';

describe('DefectsFormComponent', () => {
  let component: DefectsFormComponent;
  let fixture: ComponentFixture<DefectsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
