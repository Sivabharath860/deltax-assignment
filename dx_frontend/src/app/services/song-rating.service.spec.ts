import { TestBed } from '@angular/core/testing';

import { SongRatingService } from './song-rating.service';

describe('SongRatingService', () => {
  let service: SongRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
