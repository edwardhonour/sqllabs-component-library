import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDatepickerComponent } from './sql-datepicker.component';

describe('SqlDatepickerComponent', () => {
  let component: SqlDatepickerComponent;
  let fixture: ComponentFixture<SqlDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
