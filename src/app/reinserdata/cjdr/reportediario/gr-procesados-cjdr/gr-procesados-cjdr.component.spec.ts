import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrProcesadosCJDRComponent } from './gr-procesados-cjdr.component';

describe('GrProcesadosCJDRComponent', () => {
  let component: GrProcesadosCJDRComponent;
  let fixture: ComponentFixture<GrProcesadosCJDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrProcesadosCJDRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrProcesadosCJDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
