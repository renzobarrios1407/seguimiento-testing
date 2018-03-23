import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRevisionSeguimientosComponent } from './list-revision-seguimientos.component';

describe('ListRevisionSeguimientosComponent', () => {
  let component: ListRevisionSeguimientosComponent;
  let fixture: ComponentFixture<ListRevisionSeguimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRevisionSeguimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRevisionSeguimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
