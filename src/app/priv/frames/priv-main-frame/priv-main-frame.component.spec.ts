import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivMainFrameComponent } from './priv-main-frame.component';

describe('PrivMainFrameComponent', () => {
  let component: PrivMainFrameComponent;
  let fixture: ComponentFixture<PrivMainFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivMainFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivMainFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
