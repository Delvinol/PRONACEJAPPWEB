import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrSituacionEducativaActualCJDRComponent } from './gr-situacion-educativa-actual-cjdr.component';

describe('GrSituacionEducativaActualCJDRComponent', () => {
  let component: GrSituacionEducativaActualCJDRComponent;
  let fixture: ComponentFixture<GrSituacionEducativaActualCJDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrSituacionEducativaActualCJDRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrSituacionEducativaActualCJDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
