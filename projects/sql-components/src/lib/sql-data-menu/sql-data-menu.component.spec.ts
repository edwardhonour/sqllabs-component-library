import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlDataMenuComponent } from './sql-data-menu.component';

describe('SqlDataMenuComponent', () => {
  let component: SqlDataMenuComponent;
  let fixture: ComponentFixture<SqlDataMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlDataMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlDataMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
