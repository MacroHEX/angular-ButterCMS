import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePickerComponent } from './example-picker.component';

describe('ExamplePickerComponent', () => {
  let component: ExamplePickerComponent;
  let fixture: ComponentFixture<ExamplePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
