import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'this is lwc helloWorld';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}