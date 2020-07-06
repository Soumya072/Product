import { TestBed } from '@angular/core/testing';

import { FetchService } from './fetching.service';

describe('FetchService', () => {
  let service: FetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
