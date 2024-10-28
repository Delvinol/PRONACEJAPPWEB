import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjecucionpresupuestalComponent } from './ejecucionpresupuestal.component';

describe('EjecucionpresupuestalComponent', () => {
  let component: EjecucionpresupuestalComponent;
  let fixture: ComponentFixture<EjecucionpresupuestalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjecucionpresupuestalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjecucionpresupuestalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
