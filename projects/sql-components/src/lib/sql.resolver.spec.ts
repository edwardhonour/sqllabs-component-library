import { TestBed } from '@angular/core/testing';

import { SqlResolver } from './sql.resolver';

describe('SqlResolver', () => {
  let resolver: SqlResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SqlResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
