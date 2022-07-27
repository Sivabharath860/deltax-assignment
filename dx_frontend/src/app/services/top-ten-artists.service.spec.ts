import { TestBed } from '@angular/core/testing';

import { TopTenArtistsService } from './top-ten-artists.service';

describe('TopTenArtistsService', () => {
  let service: TopTenArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopTenArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
