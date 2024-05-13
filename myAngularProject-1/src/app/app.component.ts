import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular 14';
  msg = 'Hello, Welcome to this page';
  a = 10;
  b = 5;
  ans = this.a + this.b;
  inputVal = 'Hello';
  isDisabled = false;
  imgSrc = '/assets/Angular.jpg';
  display(msg2: string) {
    alert(msg2);
  }
  counter = 0;
  incr() {
    this.counter++;
  }
  onKeyPress() {
    console.log('keypress event is triggered');
  }
  onKeyDown() {
    console.log('keydown event is triggered');
  }
  onKeyUp() {
    console.log('keyup event is triggered');
  }
  onFocus() {
    console.log('focus event is triggered');
  }
  onSelect() {
    console.log('select event is triggered');
  }
  onKeyUp2(e: any /* keyboardEvent, mouseEvent */) {
    console.log(e);
    console.log(e.target.value);
  }
  isShift() {
    console.log('Shift + Y is pressed');
  }
  isShift2(event: any) {
    if (event.shiftKey && event.key === 'Y')
      console.log('Shift + Y is pressed', event);
  }
  staticInput: string = 'Static two-way binding';
  dynamicInput: string = '';
  inputVal2: string = '';
  dynamicVal: string = '';
  show() {
    this.dynamicVal = this.inputVal2;
  }
  count = 0;
  counter2(type: string) {
    type === 'incr' ? this.count++ : this.count--;
  }
  display2 = true;
  num = 0;
  displayElement: boolean = false;
  show2() {
    this.displayElement = !this.displayElement;
  }
  fullStackDev = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Node.js',
    },
    {
      id: 4,
      name: 'MongoDB',
    },
  ];
  listItems = [
    {
      name: 'Alex',
      age: 23,
    },
    {
      name: 'Jack',
      age: 25,
    },
    {
      name: 'Ryan',
      age: 27,
    },
    {
      name: 'Shawn',
      age: 24,
    },
    {
      name: 'Bella',
      age: 29,
    },
    {
      name: 'Peter',
      age: 32,
    },
  ];
  show3: boolean = false;
}
