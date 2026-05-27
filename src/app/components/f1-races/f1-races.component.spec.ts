import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1RacesComponent } from './f1-races.component';

describe('F1RacesComponent', () => {
  let component: F1RacesComponent;
  let fixture: ComponentFixture<F1RacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F1RacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(F1RacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
