import { TestBed } from '@angular/core/testing';

import { SqlComponentsService } from './sql-components.service';

describe('SqlComponentsService', () => {
  let service: SqlComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
