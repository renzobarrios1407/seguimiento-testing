import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAmbienteFormComponent } from './agenda-ambiente-form.component';

describe('AgendaAmbienteFormComponent', () => {
  let component: AgendaAmbienteFormComponent;
  let fixture: ComponentFixture<AgendaAmbienteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaAmbienteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAmbienteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
