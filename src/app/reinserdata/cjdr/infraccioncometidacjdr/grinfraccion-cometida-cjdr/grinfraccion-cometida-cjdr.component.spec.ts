import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrinfraccionCometidaCJDRComponent } from './grinfraccion-cometida-cjdr.component';

describe('GrinfraccionCometidaCJDRComponent', () => {
  let component: GrinfraccionCometidaCJDRComponent;
  let fixture: ComponentFixture<GrinfraccionCometidaCJDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrinfraccionCometidaCJDRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrinfraccionCometidaCJDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
