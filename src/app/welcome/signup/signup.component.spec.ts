import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { signUpComponent} from './signup.component';

describe('SignUpComponent', () => {
  let component: signUpComponent;
  let fixture: ComponentFixture<signUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ signUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(signUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
