import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEditPreview2Component } from './sql-edit-preview2.component';

describe('SqlEditPreview2Component', () => {
  let component: SqlEditPreview2Component;
  let fixture: ComponentFixture<SqlEditPreview2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlEditPreview2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlEditPreview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
