import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportediarioComponent } from './reportediario.component';

describe('ReportediarioComponent', () => {
  let component: ReportediarioComponent;
  let fixture: ComponentFixture<ReportediarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportediarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
