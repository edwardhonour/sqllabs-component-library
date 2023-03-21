import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEditTableComponent } from './sql-edit-table.component';

describe('SqlEditTableComponent', () => {
  let component: SqlEditTableComponent;
  let fixture: ComponentFixture<SqlEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlEditTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
