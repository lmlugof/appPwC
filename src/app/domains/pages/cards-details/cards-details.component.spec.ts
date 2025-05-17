import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDetailsComponent } from './cards-details.component';

describe('CardsDetailsComponent', () => {
  let component: CardsDetailsComponent;
  let fixture: ComponentFixture<CardsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
