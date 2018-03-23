import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsRevisionComponent } from './requirements-revision.component';

describe('RequirementsRevisionComponent', () => {
  let component: RequirementsRevisionComponent;
  let fixture: ComponentFixture<RequirementsRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
