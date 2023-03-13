import { TestBed } from '@angular/core/testing';

import { CharactersQueryService } from './characters-query.service';

describe('CharactersQueryService', () => {
  let service: CharactersQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
