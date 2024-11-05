import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrSituacionLaboralComponent } from './gr-situacion-laboral.component';

describe('GrSituacionLaboralComponent', () => {
  let component: GrSituacionLaboralComponent;
  let fixture: ComponentFixture<GrSituacionLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrSituacionLaboralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrSituacionLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
