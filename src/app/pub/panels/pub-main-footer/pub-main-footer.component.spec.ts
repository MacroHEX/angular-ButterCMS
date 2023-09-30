import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubMainFooterComponent } from './pub-main-footer.component';

describe('PubMainFooterComponent', () => {
  let component: PubMainFooterComponent;
  let fixture: ComponentFixture<PubMainFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubMainFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
