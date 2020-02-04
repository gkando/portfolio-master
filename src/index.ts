import { customElement, html, LitElement, property } from 'lit-element';
import './helloView';
import './app.styles.scss'
require('./img/javascript.svg')


@customElement('hello-world')
class HelloWorld extends LitElement {
  @property({ type: Number })
  private value = 0;

  public render() {
    return html`
      <hello-view
        @increment="${this.handleIncrement}"
        value="${this.value.toString()}"
      ></hello-view>
    `;
  }

  private handleIncrement() {
    this.value += 1;
  }
}

@customElement('my-element')
export class MyElement extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  foo = 'foo';

  /**
   * Implement `render` to define a template for your element.
   */
  render(){
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */
    return html`<p>${this.foo}</p>`;
  }
}