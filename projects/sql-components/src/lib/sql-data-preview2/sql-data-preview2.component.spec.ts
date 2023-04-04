import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDataPreview2Component } from './sql-data-preview2.component';

describe('SqlDataPreview2Component', () => {
  let component: SqlDataPreview2Component;
  let fixture: ComponentFixture<SqlDataPreview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDataPreview2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDataPreview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
