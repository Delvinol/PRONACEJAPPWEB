import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionEdadSimpleComponent } from './poblacionedadsimple.component';

describe('PoblacionedadsimpleComponent', () => {
  let component: PoblacionEdadSimpleComponent;
  let fixture: ComponentFixture<PoblacionEdadSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoblacionEdadSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoblacionEdadSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
