import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogManagerComponent } from './alert-dialog-manager.component';

describe('AlertDialogManagerComponent', () => {
  let component: AlertDialogManagerComponent;
  let fixture: ComponentFixture<AlertDialogManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertDialogManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDialogManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
