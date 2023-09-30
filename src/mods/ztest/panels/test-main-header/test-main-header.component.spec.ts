import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMainHeaderComponent } from './test-main-header.component';

describe('TestMainHeaderComponent', () => {
  let component: TestMainHeaderComponent;
  let fixture: ComponentFixture<TestMainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMainHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
