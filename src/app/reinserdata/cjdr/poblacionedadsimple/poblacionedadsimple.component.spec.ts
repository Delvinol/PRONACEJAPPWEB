import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionedadsimpleComponent } from './poblacionedadsimple.component';

describe('PoblacionedadsimpleComponent', () => {
  let component: PoblacionedadsimpleComponent;
  let fixture: ComponentFixture<PoblacionedadsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoblacionedadsimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoblacionedadsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
