import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarSeguimientoComponent } from './revisar-seguimiento.component';

describe('RevisarSeguimientoComponent', () => {
  let component: RevisarSeguimientoComponent;
  let fixture: ComponentFixture<RevisarSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisarSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
