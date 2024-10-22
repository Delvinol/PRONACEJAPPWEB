import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PASPEComponent } from './paspe.component';

describe('PASPEComponent', () => {
  let component: PASPEComponent;
  let fixture: ComponentFixture<PASPEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PASPEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PASPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
