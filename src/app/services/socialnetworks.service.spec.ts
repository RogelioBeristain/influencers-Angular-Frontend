import { TestBed } from '@angular/core/testing';

import { SocialNetworksService } from './social-networks.service';

describe('SocialnetworksService', () => {
  let service: SocialNetworksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialNetworksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
