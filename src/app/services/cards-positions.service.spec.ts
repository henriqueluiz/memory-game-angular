import { TestBed } from '@angular/core/testing';

import { CardsPositionsService } from './cards-positions.service';

describe('CardsPositionsService', () => {
  let service: CardsPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
