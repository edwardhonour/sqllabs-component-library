import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDataPreview3Component } from './sql-data-preview3.component';

describe('SqlDataPreview3Component', () => {
  let component: SqlDataPreview3Component;
  let fixture: ComponentFixture<SqlDataPreview3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDataPreview3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDataPreview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
