import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlCardComponent } from './sql-card.component';

describe('SqlCardComponent', () => {
  let component: SqlCardComponent;
  let fixture: ComponentFixture<SqlCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
