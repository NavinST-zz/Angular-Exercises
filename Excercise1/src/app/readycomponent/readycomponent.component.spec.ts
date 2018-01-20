import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadycomponentComponent } from './readycomponent.component';

describe('ReadycomponentComponent', () => {
  let component: ReadycomponentComponent;
  let fixture: ComponentFixture<ReadycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
