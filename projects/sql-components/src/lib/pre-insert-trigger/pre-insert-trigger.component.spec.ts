import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreInsertTriggerComponent } from './pre-insert-trigger.component';

describe('PreInsertTriggerComponent', () => {
  let component: PreInsertTriggerComponent;
  let fixture: ComponentFixture<PreInsertTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PreInsertTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreInsertTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
