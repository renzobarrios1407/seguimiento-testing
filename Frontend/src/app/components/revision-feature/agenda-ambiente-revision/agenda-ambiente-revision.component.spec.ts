import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAmbienteRevisionComponent } from './agenda-ambiente-revision.component';

describe('AgendaAmbienteRevisionComponent', () => {
  let component: AgendaAmbienteRevisionComponent;
  let fixture: ComponentFixture<AgendaAmbienteRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaAmbienteRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAmbienteRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
