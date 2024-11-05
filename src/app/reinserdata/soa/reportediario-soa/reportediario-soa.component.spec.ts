import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportediarioSOAComponent } from './reportediario-soa.component';

describe('ReportediarioSOAComponent', () => {
  let component: ReportediarioSOAComponent;
  let fixture: ComponentFixture<ReportediarioSOAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportediarioSOAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportediarioSOAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
