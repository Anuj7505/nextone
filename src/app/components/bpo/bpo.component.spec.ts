import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpoComponent } from './bpo.component';

describe('BpoComponent', () => {
  let component: BpoComponent;
  let fixture: ComponentFixture<BpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
