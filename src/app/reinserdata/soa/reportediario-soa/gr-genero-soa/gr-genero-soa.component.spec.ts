import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrGeneroSOAComponent } from './gr-genero-soa.component';

describe('GrGeneroSOAComponent', () => {
  let component: GrGeneroSOAComponent;
  let fixture: ComponentFixture<GrGeneroSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrGeneroSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrGeneroSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
