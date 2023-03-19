import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlPanelComponent } from './sql-panel.component';

describe('SqlPanelComponent', () => {
  let component: SqlPanelComponent;
  let fixture: ComponentFixture<SqlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
