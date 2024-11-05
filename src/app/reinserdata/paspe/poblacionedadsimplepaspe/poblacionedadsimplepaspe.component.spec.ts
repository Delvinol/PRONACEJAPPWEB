import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblacionedadsimplepaspeComponent } from './poblacionedadsimplepaspe.component';

describe('PoblacionedadsimplepaspeComponent', () => {
  let component: PoblacionedadsimplepaspeComponent;
  let fixture: ComponentFixture<PoblacionedadsimplepaspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoblacionedadsimplepaspeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoblacionedadsimplepaspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
