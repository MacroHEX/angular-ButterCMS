import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContentFrameComponent } from './test-content-frame.component';

describe('TestContentFrameComponent', () => {
  let component: TestContentFrameComponent;
  let fixture: ComponentFixture<TestContentFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestContentFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestContentFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
