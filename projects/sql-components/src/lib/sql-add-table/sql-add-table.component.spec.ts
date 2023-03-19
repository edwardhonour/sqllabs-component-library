import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlAddTableComponent } from './sql-add-table.component';

describe('SqlAddTableComponent', () => {
  let component: SqlAddTableComponent;
  let fixture: ComponentFixture<SqlAddTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlAddTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlAddTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
