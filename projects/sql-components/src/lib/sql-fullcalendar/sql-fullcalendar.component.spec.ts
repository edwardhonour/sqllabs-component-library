import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlFullcalendarComponent } from './sql-fullcalendar.component';

describe('SqlFullcalendarComponent', () => {
  let component: SqlFullcalendarComponent;
  let fixture: ComponentFixture<SqlFullcalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlFullcalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlFullcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
