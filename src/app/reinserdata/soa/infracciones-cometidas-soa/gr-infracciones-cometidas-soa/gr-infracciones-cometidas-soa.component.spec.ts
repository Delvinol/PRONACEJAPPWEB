import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrInfraccionesCometidasSOAComponent } from './gr-infracciones-cometidas-soa.component';

describe('GrInfraccionesCometidasSOAComponent', () => {
  let component: GrInfraccionesCometidasSOAComponent;
  let fixture: ComponentFixture<GrInfraccionesCometidasSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrInfraccionesCometidasSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrInfraccionesCometidasSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
