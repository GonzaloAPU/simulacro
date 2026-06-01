import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulacroComponent } from './simulacro.component';

describe('SimulacroComponent', () => {
  let component: SimulacroComponent;
  let fixture: ComponentFixture<SimulacroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulacroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
