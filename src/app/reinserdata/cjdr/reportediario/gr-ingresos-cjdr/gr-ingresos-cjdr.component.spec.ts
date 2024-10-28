import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrIngresosCJDRComponent } from './gr-ingresos-cjdr.component';

describe('GrIngresosCJDRComponent', () => {
  let component: GrIngresosCJDRComponent;
  let fixture: ComponentFixture<GrIngresosCJDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrIngresosCJDRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrIngresosCJDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
