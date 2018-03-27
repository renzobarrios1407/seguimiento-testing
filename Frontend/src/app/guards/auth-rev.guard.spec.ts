import { TestBed, async, inject } from '@angular/core/testing';

import { AuthRevGuard } from './auth-rev.guard';

describe('AuthRevGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRevGuard]
    });
  });

  it('should ...', inject([AuthRevGuard], (guard: AuthRevGuard) => {
    expect(guard).toBeTruthy();
  }));
});
