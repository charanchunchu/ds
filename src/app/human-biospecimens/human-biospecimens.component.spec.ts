import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanBiospecimensComponent } from './human-biospecimens.component';

describe('HumanBiospecimensComponent', () => {
  let component: HumanBiospecimensComponent;
  let fixture: ComponentFixture<HumanBiospecimensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanBiospecimensComponent]
    });
    fixture = TestBed.createComponent(HumanBiospecimensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
