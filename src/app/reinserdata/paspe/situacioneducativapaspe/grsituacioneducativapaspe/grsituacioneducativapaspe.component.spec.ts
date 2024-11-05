import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrsituacioneducativapaspeComponent } from './grsituacioneducativapaspe.component';

describe('GrsituacioneducativapaspeComponent', () => {
  let component: GrsituacioneducativapaspeComponent;
  let fixture: ComponentFixture<GrsituacioneducativapaspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrsituacioneducativapaspeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrsituacioneducativapaspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
