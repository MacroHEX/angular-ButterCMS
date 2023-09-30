import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOtherFrameComponent } from './test-other-frame.component';

describe('TestOtherFrameComponent', () => {
  let component: TestOtherFrameComponent;
  let fixture: ComponentFixture<TestOtherFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOtherFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestOtherFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
