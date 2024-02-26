import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractsHerbsComponent } from './extracts-herbs.component';

describe('ExtractsHerbsComponent', () => {
  let component: ExtractsHerbsComponent;
  let fixture: ComponentFixture<ExtractsHerbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtractsHerbsComponent]
    });
    fixture = TestBed.createComponent(ExtractsHerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
