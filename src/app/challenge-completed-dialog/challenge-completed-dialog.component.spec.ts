import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCompletedDialogComponent } from './challenge-completed-dialog.component';

describe('ChallengeCompletedDialogComponent', () => {
  let component: ChallengeCompletedDialogComponent;
  let fixture: ComponentFixture<ChallengeCompletedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCompletedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCompletedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
