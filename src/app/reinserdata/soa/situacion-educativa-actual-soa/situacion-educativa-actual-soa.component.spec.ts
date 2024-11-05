import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionEducativaActualSOAComponent } from './situacion-educativa-actual-soa.component';

describe('SituacionEducativaActualSOAComponent', () => {
  let component: SituacionEducativaActualSOAComponent;
  let fixture: ComponentFixture<SituacionEducativaActualSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacionEducativaActualSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacionEducativaActualSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
