import { TestBed } from '@angular/core/testing';

import { GetcategoriesService } from './getcategories.service';

describe('GetcategoriesService', () => {
  let service: GetcategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
