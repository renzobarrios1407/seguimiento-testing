import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodDdtVstsRevisionComponent } from './dod-ddt-vsts-revision.component';

describe('DodDdtVstsRevisionComponent', () => {
  let component: DodDdtVstsRevisionComponent;
  let fixture: ComponentFixture<DodDdtVstsRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodDdtVstsRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodDdtVstsRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
