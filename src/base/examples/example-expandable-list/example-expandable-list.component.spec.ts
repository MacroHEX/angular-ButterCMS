import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleExpandableListComponent } from './example-expandable-list.component';

describe('ExampleExpandableListComponent', () => {
  let component: ExampleExpandableListComponent;
  let fixture: ComponentFixture<ExampleExpandableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleExpandableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleExpandableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
