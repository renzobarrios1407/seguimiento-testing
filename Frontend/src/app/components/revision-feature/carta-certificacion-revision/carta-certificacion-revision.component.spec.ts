import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCertificacionRevisionComponent } from './carta-certificacion-revision.component';

describe('CartaCertificacionRevisionComponent', () => {
  let component: CartaCertificacionRevisionComponent;
  let fixture: ComponentFixture<CartaCertificacionRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaCertificacionRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaCertificacionRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
