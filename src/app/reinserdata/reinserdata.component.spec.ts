import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinserdataComponent } from './reinserdata.component';

describe('ReinserdataComponent', () => {
  let component: ReinserdataComponent;
  let fixture: ComponentFixture<ReinserdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReinserdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
