import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticaParcialComponent } from './practica-parcial.component';

describe('PracticaParcialComponent', () => {
  let component: PracticaParcialComponent;
  let fixture: ComponentFixture<PracticaParcialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticaParcialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticaParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
