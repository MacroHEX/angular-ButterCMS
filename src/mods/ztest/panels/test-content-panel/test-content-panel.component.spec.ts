import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContentPanelComponent } from './test-content-panel.component';

describe('TestContentPanelComponent', () => {
  let component: TestContentPanelComponent;
  let fixture: ComponentFixture<TestContentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestContentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
