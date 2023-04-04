import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEditPreview3Component } from './sql-edit-preview3.component';

describe('SqlEditPreview3Component', () => {
  let component: SqlEditPreview3Component;
  let fixture: ComponentFixture<SqlEditPreview3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlEditPreview3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlEditPreview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
