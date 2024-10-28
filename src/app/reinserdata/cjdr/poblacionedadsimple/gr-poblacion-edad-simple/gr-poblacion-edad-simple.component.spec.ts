import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrPoblacionEdadSimpleComponent } from './gr-poblacion-edad-simple.component';

describe('GrPoblacionEdadSimpleComponent', () => {
  let component: GrPoblacionEdadSimpleComponent;
  let fixture: ComponentFixture<GrPoblacionEdadSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrPoblacionEdadSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrPoblacionEdadSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
