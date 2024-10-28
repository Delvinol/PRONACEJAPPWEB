import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoshumanosComponent } from './recursoshumanos.component';

describe('RecursoshumanosComponent', () => {
  let component: RecursoshumanosComponent;
  let fixture: ComponentFixture<RecursoshumanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecursoshumanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursoshumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
