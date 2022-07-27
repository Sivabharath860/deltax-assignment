import { TestBed } from '@angular/core/testing';

import { TopTenSongsService } from './top-ten-songs.service';

describe('TopTenSongsService', () => {
  let service: TopTenSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopTenSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
