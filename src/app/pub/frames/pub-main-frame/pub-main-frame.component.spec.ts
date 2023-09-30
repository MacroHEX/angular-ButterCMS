import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubMainFrameComponent } from './pub-main-frame.component';

describe('PubMainFrameComponent', () => {
  let component: PubMainFrameComponent;
  let fixture: ComponentFixture<PubMainFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubMainFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubMainFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
