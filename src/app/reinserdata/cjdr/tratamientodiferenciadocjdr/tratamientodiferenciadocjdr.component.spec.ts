import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientodiferenciadocjdrComponent } from './tratamientodiferenciadocjdr.component';

describe('TratamientodiferenciadocjdrComponent', () => {
  let component: TratamientodiferenciadocjdrComponent;
  let fixture: ComponentFixture<TratamientodiferenciadocjdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratamientodiferenciadocjdrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientodiferenciadocjdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
