import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMainFrameComponent } from './test-main-frame.component';

describe('TestMainFrameComponent', () => {
  let component: TestMainFrameComponent;
  let fixture: ComponentFixture<TestMainFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMainFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMainFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
