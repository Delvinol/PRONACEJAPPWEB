import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrPoblacionSOAComponent } from './gr-poblacion-soa.component';

describe('GrPoblacionSOAComponent', () => {
  let component: GrPoblacionSOAComponent;
  let fixture: ComponentFixture<GrPoblacionSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrPoblacionSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrPoblacionSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
