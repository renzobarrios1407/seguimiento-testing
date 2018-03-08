import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCertificacionFormComponent } from './carta-certificacion-form.component';

describe('CartaCertificacionFormComponent', () => {
  let component: CartaCertificacionFormComponent;
  let fixture: ComponentFixture<CartaCertificacionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaCertificacionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaCertificacionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
