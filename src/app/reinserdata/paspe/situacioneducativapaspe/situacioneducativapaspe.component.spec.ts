import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacioneducativapaspeComponent } from './situacioneducativapaspe.component';

describe('SituacioneducativapaspeComponent', () => {
  let component: SituacioneducativapaspeComponent;
  let fixture: ComponentFixture<SituacioneducativapaspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacioneducativapaspeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacioneducativapaspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
