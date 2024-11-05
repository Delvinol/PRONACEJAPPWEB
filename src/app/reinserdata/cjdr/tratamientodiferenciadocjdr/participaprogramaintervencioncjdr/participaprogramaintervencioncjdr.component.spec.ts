import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipaprogramaintervencioncjdrComponent } from './participaprogramaintervencioncjdr.component';

describe('ParticipaprogramaintervencioncjdrComponent', () => {
  let component: ParticipaprogramaintervencioncjdrComponent;
  let fixture: ComponentFixture<ParticipaprogramaintervencioncjdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipaprogramaintervencioncjdrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipaprogramaintervencioncjdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
