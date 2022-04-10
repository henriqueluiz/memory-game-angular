import { TestBed } from '@angular/core/testing';

import { VictoryGuard } from './victory.guard';

describe('VictoryGuard', () => {
  let guard: VictoryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VictoryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
