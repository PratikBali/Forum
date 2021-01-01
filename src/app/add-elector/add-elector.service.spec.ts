import { TestBed } from '@angular/core/testing';

import { AddElectorService } from './add-elector.service';

describe('AddElectorService', () => {
  let service: AddElectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddElectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
