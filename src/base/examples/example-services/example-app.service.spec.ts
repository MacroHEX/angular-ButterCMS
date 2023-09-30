import { TestBed } from '@angular/core/testing';

import { ExampleAppService } from './example-app.service';

describe('ExampleAppService', () => {
  let service: ExampleAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
