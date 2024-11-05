import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GredadsimplepaspeComponent } from './gredadsimplepaspe.component';

describe('GredadsimplepaspeComponent', () => {
  let component: GredadsimplepaspeComponent;
  let fixture: ComponentFixture<GredadsimplepaspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GredadsimplepaspeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GredadsimplepaspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
