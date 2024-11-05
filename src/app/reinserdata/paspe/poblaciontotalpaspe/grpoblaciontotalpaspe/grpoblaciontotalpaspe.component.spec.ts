import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpoblaciontotalpaspeComponent } from './grpoblaciontotalpaspe.component';

describe('GrpoblaciontotalpaspeComponent', () => {
  let component: GrpoblaciontotalpaspeComponent;
  let fixture: ComponentFixture<GrpoblaciontotalpaspeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrpoblaciontotalpaspeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrpoblaciontotalpaspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
