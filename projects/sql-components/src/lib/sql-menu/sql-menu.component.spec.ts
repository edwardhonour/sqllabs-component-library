import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlMenuComponent } from './sql-menu.component';

describe('SqlMenuComponent', () => {
  let component: SqlMenuComponent;
  let fixture: ComponentFixture<SqlMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
