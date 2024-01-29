import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSpecimensComponent } from './plant-specimens.component';

describe('PlantSpecimensComponent', () => {
  let component: PlantSpecimensComponent;
  let fixture: ComponentFixture<PlantSpecimensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantSpecimensComponent]
    });
    fixture = TestBed.createComponent(PlantSpecimensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
