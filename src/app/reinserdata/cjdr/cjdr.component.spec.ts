import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CJDRComponent } from './cjdr.component';

describe('CJDRComponent', () => {
  let component: CJDRComponent;
  let fixture: ComponentFixture<CJDRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CJDRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CJDRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
