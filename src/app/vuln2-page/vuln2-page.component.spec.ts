import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vuln2PageComponent } from './vuln2-page.component';

describe('Vuln2PageComponent', () => {
  let component: Vuln2PageComponent;
  let fixture: ComponentFixture<Vuln2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vuln2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vuln2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
