import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdRevisionComponent } from './usd-revision.component';

describe('UsdRevisionComponent', () => {
  let component: UsdRevisionComponent;
  let fixture: ComponentFixture<UsdRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
