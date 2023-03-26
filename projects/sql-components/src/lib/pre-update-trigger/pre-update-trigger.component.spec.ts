import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreUpdateTriggerComponent } from './pre-update-trigger.component';

describe('PreUpdateTriggerComponent', () => {
  let component: PreUpdateTriggerComponent;
  let fixture: ComponentFixture<PreUpdateTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PreUpdateTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreUpdateTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
