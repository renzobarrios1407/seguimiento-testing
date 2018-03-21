import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLabRevisionComponent } from './test-lab-revision.component';

describe('TestLabRevisionComponent', () => {
  let component: TestLabRevisionComponent;
  let fixture: ComponentFixture<TestLabRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLabRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLabRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
