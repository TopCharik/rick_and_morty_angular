import { TestBed } from '@angular/core/testing';

import { SingleCharacterService } from './single-character.service';

describe('SingleCharacterService', () => {
  let service: SingleCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
