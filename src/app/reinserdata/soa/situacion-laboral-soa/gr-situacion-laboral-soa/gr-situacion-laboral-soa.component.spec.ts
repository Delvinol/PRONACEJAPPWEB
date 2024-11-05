import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrSituacionLaboralSOAComponent } from './gr-situacion-laboral-soa.component';

describe('GrSituacionLaboralSOAComponent', () => {
  let component: GrSituacionLaboralSOAComponent;
  let fixture: ComponentFixture<GrSituacionLaboralSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrSituacionLaboralSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrSituacionLaboralSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
