import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsercionlaboralpaspeComponent } from './insercionlaboralpaspe.component';

describe('InsercionlaboralpaspeComponent', () => {
  let component: InsercionlaboralpaspeComponent;
  let fixture: ComponentFixture<InsercionlaboralpaspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsercionlaboralpaspeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsercionlaboralpaspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
