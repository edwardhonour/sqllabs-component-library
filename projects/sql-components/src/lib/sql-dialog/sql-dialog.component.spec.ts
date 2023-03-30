import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDialogComponent } from './sql-dialog.component';

describe('SqlDialogComponent', () => {
  let component: SqlDialogComponent;
  let fixture: ComponentFixture<SqlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
