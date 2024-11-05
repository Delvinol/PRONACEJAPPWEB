import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionEdadSimpleSOAComponent } from './poblacion-edad-simple-soa.component';

describe('PoblacionEdadSimpleSOAComponent', () => {
  let component: PoblacionEdadSimpleSOAComponent;
  let fixture: ComponentFixture<PoblacionEdadSimpleSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoblacionEdadSimpleSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoblacionEdadSimpleSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
