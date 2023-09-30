import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestContentMenuComponent } from './test-content-menu.component';

describe('TestContentMenuComponent', () => {
  let component: TestContentMenuComponent;
  let fixture: ComponentFixture<TestContentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestContentMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestContentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
