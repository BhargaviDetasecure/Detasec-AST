import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vunl4PageComponent } from './vunl4-page.component';

describe('Vunl4PageComponent', () => {
  let component: Vunl4PageComponent;
  let fixture: ComponentFixture<Vunl4PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vunl4PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vunl4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
