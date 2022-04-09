import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithBackgroundComponent } from './with-background.component';

describe('WithBackgroundComponent', () => {
  let component: WithBackgroundComponent;
  let fixture: ComponentFixture<WithBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
