import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEditPreviewComponent } from './sql-edit-preview.component';

describe('SqlEditPreviewComponent', () => {
  let component: SqlEditPreviewComponent;
  let fixture: ComponentFixture<SqlEditPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SqlEditPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlEditPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
