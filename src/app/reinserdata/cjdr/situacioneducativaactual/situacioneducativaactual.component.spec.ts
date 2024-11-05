import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacioneducativaactualComponent } from './situacioneducativaactual.component';

describe('SituacioneducativaactualComponent', () => {
  let component: SituacioneducativaactualComponent;
  let fixture: ComponentFixture<SituacioneducativaactualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacioneducativaactualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacioneducativaactualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
