import { TestBed } from '@angular/core/testing';

import { ListProductResolver } from './list-product.resolver';

describe('ListProductResolver', () => {
  let resolver: ListProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
