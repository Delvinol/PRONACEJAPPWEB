import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoblaciontotalpaspeComponent } from './poblaciontotalpaspe.component';

describe('PoblaciontotalpaspeComponent', () => {
  let component: PoblaciontotalpaspeComponent;
  let fixture: ComponentFixture<PoblaciontotalpaspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoblaciontotalpaspeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoblaciontotalpaspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
