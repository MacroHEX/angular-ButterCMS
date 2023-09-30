import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentFrameComponent } from './home-content-frame.component';

describe('HomeContentFrameComponent', () => {
  let component: HomeContentFrameComponent;
  let fixture: ComponentFixture<HomeContentFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContentFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContentFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
