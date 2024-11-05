import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionLaboralSOAComponent } from './situacion-laboral-soa.component';

describe('SituacionLaboralSOAComponent', () => {
  let component: SituacionLaboralSOAComponent;
  let fixture: ComponentFixture<SituacionLaboralSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacionLaboralSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacionLaboralSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
