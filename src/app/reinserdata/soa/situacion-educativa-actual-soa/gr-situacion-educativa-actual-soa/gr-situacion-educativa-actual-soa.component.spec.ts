import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrSituacionEducativaActualSOAComponent } from './gr-situacion-educativa-actual-soa.component';

describe('GrSituacionEducativaActualSOAComponent', () => {
  let component: GrSituacionEducativaActualSOAComponent;
  let fixture: ComponentFixture<GrSituacionEducativaActualSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrSituacionEducativaActualSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrSituacionEducativaActualSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
