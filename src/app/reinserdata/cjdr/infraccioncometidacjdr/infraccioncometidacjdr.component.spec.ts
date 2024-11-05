import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraccioncometidacjdrComponent } from './infraccioncometidacjdr.component';

describe('InfraccioncometidacjdrComponent', () => {
  let component: InfraccioncometidacjdrComponent;
  let fixture: ComponentFixture<InfraccioncometidacjdrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfraccioncometidacjdrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfraccioncometidacjdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
