import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinetechComponent } from './finetech.component';

describe('FinetechComponent', () => {
  let component: FinetechComponent;
  let fixture: ComponentFixture<FinetechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinetechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinetechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
