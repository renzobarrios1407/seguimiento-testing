import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefectsRevisionComponent } from './defects-revision.component';

describe('DefectsRevisionComponent', () => {
  let component: DefectsRevisionComponent;
  let fixture: ComponentFixture<DefectsRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefectsRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefectsRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
