import { TestBed } from '@angular/core/testing';

import { ContactPageServiceService } from './contact-page-service.service';

describe('ContactPageServiceService', () => {
  let service: ContactPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
