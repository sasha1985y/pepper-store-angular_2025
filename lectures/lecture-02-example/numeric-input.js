class Popover {
  constructor(props) {
    this.props = props;
    this.className = props.className || "";
    this._open = false;
  }

  template = function () {
    return `<div class="${this.className}">
      <p>${this.children}</p>
    </div>`;
  }

  render(container) {
    container.innerHTML = this.template();
  }
}

class NumericInput {
  constructor(props) {
    this.props = props;
    this.className = props.className || ""; // props
    this.popover = new Popover({
      className: "popover",
    });

    this._value = props.value || 0; // state

    this.maxValue = props.maxValue || Infinity;
    this.minValue = props.minValue || -Infinity;
  }

  template = function () {
    return `<div class="${this.className}">
      <input type="number" value="${this._value}" />
      <button type="button" disabled="${this._value >= this.maxValue}">+</button>
      <button type="button" disabled="${this._value <= this.minValue}">-</button>
    </div>`;
  }

  render(container) {
    container.innerHTML = this.template();
    this.element = container.querySelector("input");
    this.plusButton = container.querySelector("button:nth-child(1)");
    this.minusButton = container.querySelector("button:nth-child(2)");

    this.numericInputElement = container.querySelector("div");

    this.popover.render(this.numericInputElement);

    this.numericInputElement.onmouseenter = () => {
      setTimeout(() => {
        this.popover.open();
      }, 1000);
    }
    this.numericInputElement.onmouseleave = () => {
      setTimeout(() => {
        this.popover.close();
      }, 1000);
    }

    this.plusButton.onclick = () => {
      this._value++;
      this.render(container);
    }

    this.minusButton.onclick = () => {
      this._value--;
      this.render(container);
    }

    this.element.onchange = () => {
      this._value = this.element.value;
      this.render(container);
    }
  }
}

const container = document.querySelector("#container");
const numericInput = new NumericInput({
  value: 0,
  className: "numeric-input",
});

numericInput.render(container);
