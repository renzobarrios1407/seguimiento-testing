import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioFormComponent } from './repositorio-form.component';

describe('RepositorioFormComponent', () => {
  let component: RepositorioFormComponent;
  let fixture: ComponentFixture<RepositorioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositorioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositorioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
