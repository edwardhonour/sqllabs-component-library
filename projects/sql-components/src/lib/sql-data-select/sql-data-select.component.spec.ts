import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDataSelectComponent } from './sql-data-select.component';

describe('SqlDataSelectComponent', () => {
  let component: SqlDataSelectComponent;
  let fixture: ComponentFixture<SqlDataSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDataSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDataSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
