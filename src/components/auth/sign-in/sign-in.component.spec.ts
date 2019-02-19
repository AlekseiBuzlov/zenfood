import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SignInComponent
      ],
    }).compileComponents();
  }));
});
