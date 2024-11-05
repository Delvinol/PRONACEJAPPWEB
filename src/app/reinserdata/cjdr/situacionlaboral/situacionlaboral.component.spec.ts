import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionlaboralComponent } from './situacionlaboral.component';

describe('SituacionlaboralComponent', () => {
  let component: SituacionlaboralComponent;
  let fixture: ComponentFixture<SituacionlaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituacionlaboralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituacionlaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
