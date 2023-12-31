import { TestBed } from '@angular/core/testing';

import { FicheServiceService } from './fiche-service.service';

describe('FicheServiceService', () => {
  let service: FicheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
