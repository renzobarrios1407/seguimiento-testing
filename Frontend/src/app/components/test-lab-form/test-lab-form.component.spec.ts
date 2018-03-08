import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLabFormComponent } from './test-lab-form.component';

describe('TestLabFormComponent', () => {
  let component: TestLabFormComponent;
  let fixture: ComponentFixture<TestLabFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLabFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
