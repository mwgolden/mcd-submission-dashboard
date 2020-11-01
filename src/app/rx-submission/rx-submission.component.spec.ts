import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSubmissionComponent } from './rx-submission.component';

describe('RxSubmissionComponent', () => {
  let component: RxSubmissionComponent;
  let fixture: ComponentFixture<RxSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
