import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrinsercionlaboralpaspeComponent } from './grinsercionlaboralpaspe.component';

describe('GrinsercionlaboralpaspeComponent', () => {
  let component: GrinsercionlaboralpaspeComponent;
  let fixture: ComponentFixture<GrinsercionlaboralpaspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrinsercionlaboralpaspeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrinsercionlaboralpaspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
