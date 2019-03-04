import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileComponent } from './profile.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProfileComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(ProfileComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'my-angular-app'`, () => {
  //   const fixture = TestBed.createComponent(ProfileComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('my-angular-app');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(ProfileComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-angular-app!');
  // });
});
