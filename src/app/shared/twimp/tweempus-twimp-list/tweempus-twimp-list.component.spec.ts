import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweempusTwimpListComponent } from './tweempus-twimp-list.component';

describe('TweempusTwimpListComponent', () => {
  let component: TweempusTwimpListComponent;
  let fixture: ComponentFixture<TweempusTwimpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweempusTwimpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweempusTwimpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
