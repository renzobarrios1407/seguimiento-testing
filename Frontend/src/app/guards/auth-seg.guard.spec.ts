import { TestBed, async, inject } from '@angular/core/testing';

import { AuthSegGuard } from './auth-seg.guard';

describe('AuthSegGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthSegGuard]
    });
  });

  it('should ...', inject([AuthSegGuard], (guard: AuthSegGuard) => {
    expect(guard).toBeTruthy();
  }));
});
