import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillingComponent } from './skilling.component';

describe('SkillingComponent', () => {
  let component: SkillingComponent;
  let fixture: ComponentFixture<SkillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
