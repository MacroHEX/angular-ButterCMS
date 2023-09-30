import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContentFrameComponent } from './example-content-frame.component';

describe('ExampleContentFrameComponent', () => {
  let component: ExampleContentFrameComponent;
  let fixture: ComponentFixture<ExampleContentFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleContentFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleContentFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
