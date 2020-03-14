import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJqueryDatatableComponent } from './ngx-jquery-datatable.component';

describe('NgxJqueryDatatableComponent', () => {
  let component: NgxJqueryDatatableComponent;
  let fixture: ComponentFixture<NgxJqueryDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJqueryDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJqueryDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
