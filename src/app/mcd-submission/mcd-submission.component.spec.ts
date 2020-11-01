import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McdSubmissionComponent } from './mcd-submission.component';

describe('McdSubmissionComponent', () => {
  let component: McdSubmissionComponent;
  let fixture: ComponentFixture<McdSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McdSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McdSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
