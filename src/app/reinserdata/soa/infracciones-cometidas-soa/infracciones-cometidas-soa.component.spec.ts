import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraccionesCometidasSOAComponent } from './infracciones-cometidas-soa.component';

describe('InfraccionesCometidasSOAComponent', () => {
  let component: InfraccionesCometidasSOAComponent;
  let fixture: ComponentFixture<InfraccionesCometidasSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfraccionesCometidasSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraccionesCometidasSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
