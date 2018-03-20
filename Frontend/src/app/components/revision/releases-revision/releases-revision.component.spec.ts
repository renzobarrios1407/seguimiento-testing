import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesRevisionComponent } from './releases-revision.component';

describe('ReleasesRevisionComponent', () => {
  let component: ReleasesRevisionComponent;
  let fixture: ComponentFixture<ReleasesRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasesRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasesRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
