import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostQueryTriggerComponent } from './post-query-trigger.component';

describe('PostQueryTriggerComponent', () => {
  let component: PostQueryTriggerComponent;
  let fixture: ComponentFixture<PostQueryTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PostQueryTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostQueryTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
