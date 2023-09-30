import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubMainHeaderComponent } from './pub-main-header.component';

describe('PubMainHeaderComponent', () => {
  let component: PubMainHeaderComponent;
  let fixture: ComponentFixture<PubMainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubMainHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
