import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramePanelComponent } from './frame-panel.component';

describe('FramePanelComponent', () => {
  let component: FramePanelComponent;
  let fixture: ComponentFixture<FramePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
