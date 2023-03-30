import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDeleteDialogComponent } from './sql-delete-dialog.component';

describe('SqlDeleteDialogComponent', () => {
  let component: SqlDeleteDialogComponent;
  let fixture: ComponentFixture<SqlDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
