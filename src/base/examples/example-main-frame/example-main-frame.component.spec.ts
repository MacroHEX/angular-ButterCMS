import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMainFrameComponent } from './example-main-frame.component';

describe('ExampleMainFrameComponent', () => {
  let component: ExampleMainFrameComponent;
  let fixture: ComponentFixture<ExampleMainFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleMainFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleMainFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
