import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymwebComponent } from './gymweb.component';

describe('GymwebComponent', () => {
  let component: GymwebComponent;
  let fixture: ComponentFixture<GymwebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymwebComponent]
    });
    fixture = TestBed.createComponent(GymwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
