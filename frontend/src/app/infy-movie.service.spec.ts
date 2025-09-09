import { TestBed } from '@angular/core/testing';

import { InfyMovieService } from './infy-movie.service';

describe('InfyMovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfyMovieService = TestBed.get(InfyMovieService);
    expect(service).toBeTruthy();
  });
});
