import { TestBed } from '@angular/core/testing';

import { CreateAccoutService } from './create-accout.service';

describe('CreateAccoutService', () => {
  let service: CreateAccoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAccoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
