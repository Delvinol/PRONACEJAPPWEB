import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrMayoresCJDRComponent } from './gr-mayores-cjdr.component';

describe('GrMayoresCJDRComponent', () => {
  let component: GrMayoresCJDRComponent;
  let fixture: ComponentFixture<GrMayoresCJDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrMayoresCJDRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrMayoresCJDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
