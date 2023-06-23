/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AritclesSliderComponent } from './aritcles-slider.component';

describe('AritclesSliderComponent', () => {
  let component: AritclesSliderComponent;
  let fixture: ComponentFixture<AritclesSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AritclesSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AritclesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
