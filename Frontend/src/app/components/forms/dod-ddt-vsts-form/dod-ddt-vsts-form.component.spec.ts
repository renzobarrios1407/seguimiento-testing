import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodDdtVstsFormComponent } from './dod-ddt-vsts-form.component';

describe('DodDdtVstsFormComponent', () => {
  let component: DodDdtVstsFormComponent;
  let fixture: ComponentFixture<DodDdtVstsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodDdtVstsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodDdtVstsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
