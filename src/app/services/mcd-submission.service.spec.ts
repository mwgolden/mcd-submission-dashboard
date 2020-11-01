import { TestBed } from '@angular/core/testing';

import { McdSubmissionService } from './mcd-submission.service';

describe('McdSubmissionService', () => {
  let service: McdSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McdSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
