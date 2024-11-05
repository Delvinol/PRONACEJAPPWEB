import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrPoblacionEdadSimpleSOAComponent } from './gr-poblacion-edad-simple-soa.component';

describe('GrPoblacionEdadSimpleSOAComponent', () => {
  let component: GrPoblacionEdadSimpleSOAComponent;
  let fixture: ComponentFixture<GrPoblacionEdadSimpleSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrPoblacionEdadSimpleSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrPoblacionEdadSimpleSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
