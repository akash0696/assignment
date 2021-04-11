import { TestBed } from '@angular/core/testing';

import { MoviesAuthService } from './movies-auth.service';

describe('MoviesAuthService', () => {
  let service: MoviesAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
