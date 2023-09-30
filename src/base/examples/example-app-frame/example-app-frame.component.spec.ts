import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAppFrameComponent } from './example-app-frame.component';

describe('ExampleAppFrameComponent', () => {
  let component: ExampleAppFrameComponent;
  let fixture: ComponentFixture<ExampleAppFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAppFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleAppFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
