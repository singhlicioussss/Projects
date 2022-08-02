import { TestBed } from '@angular/core/testing';

import { TostrService } from './tostr.service';

describe('TostrService', () => {
  let service: TostrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TostrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
