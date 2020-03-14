import { TestBed } from '@angular/core/testing';

import { NgxJqueryDatatableService } from './ngx-jquery-datatable.service';

describe('NgxJqueryDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxJqueryDatatableService = TestBed.get(NgxJqueryDatatableService);
    expect(service).toBeTruthy();
  });
});
