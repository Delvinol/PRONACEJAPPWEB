import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrPoblacionCJDRComponent } from './gr-poblacion-cjdr.component';

describe('GrPoblacionCJDRComponent', () => {
  let component: GrPoblacionCJDRComponent;
  let fixture: ComponentFixture<GrPoblacionCJDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrPoblacionCJDRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrPoblacionCJDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
