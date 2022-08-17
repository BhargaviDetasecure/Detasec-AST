import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vunl3PageComponent } from './vunl3-page.component';

describe('Vunl3PageComponent', () => {
  let component: Vunl3PageComponent;
  let fixture: ComponentFixture<Vunl3PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vunl3PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vunl3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
