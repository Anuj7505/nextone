import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicsectorComponent } from './publicsector.component';

describe('PublicsectorComponent', () => {
  let component: PublicsectorComponent;
  let fixture: ComponentFixture<PublicsectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicsectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
