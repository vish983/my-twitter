import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTweetComponent } from './individual-tweet.component';

describe('IndividualTweetComponent', () => {
  let component: IndividualTweetComponent;
  let fixture: ComponentFixture<IndividualTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
