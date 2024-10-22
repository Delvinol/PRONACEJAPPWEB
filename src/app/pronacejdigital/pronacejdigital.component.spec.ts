import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronacejdigitalComponent } from './pronacejdigital.component';

describe('PronacejdigitalComponent', () => {
  let component: PronacejdigitalComponent;
  let fixture: ComponentFixture<PronacejdigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PronacejdigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronacejdigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
