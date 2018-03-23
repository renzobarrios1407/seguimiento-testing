import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioRevisionComponent } from './repositorio-revision.component';

describe('RepositorioRevisionComponent', () => {
  let component: RepositorioRevisionComponent;
  let fixture: ComponentFixture<RepositorioRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
