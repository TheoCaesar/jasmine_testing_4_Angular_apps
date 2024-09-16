import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jasmine_testing_4_Angular_apps'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jasmine_testing_4_Angular_apps');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, jasmine_testing_4_Angular_apps');
  });

  describe("PDF Tests", () => {
    describe("Chapter Two - Common Matchers", ()=> {
      
      it("Basic Assertion - toBe", ()=>{
        const result = 2 + 3;
        expect(result).toBe(5) //strict equality equiv
      });

      it("to Equal Matcher", ()=> {
        // deep equality for reference types objs & arrays
        const person1 = {
          name: "Tom",
          age: 204
        };

        const person2 = {
          name: "Tom",
          age: 204
        }
        expect(person1).toEqual(person2); 
      });

      it("to Contain Matcher", ()=> {
        const ludo = [1, 2, 3, 4, 5 , 6];
        const nom = "Richard"
        expect(ludo).toContain(2);
        expect(nom.toLowerCase()).toContain("rich")
      })

      it("to Be Truthy or Falsy", ()=>{
        const nom = "timothy";
        const age = undefined;
        expect(nom).toBeTruthy();
        expect(age).toBeUndefined();
        expect(age).toBeFalsy();
      })
    })
  })
});
