import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDeleteComponent } from './sql-delete.component';

describe('SqlDeleteComponent', () => {
  let component: SqlDeleteComponent;
  let fixture: ComponentFixture<SqlDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
