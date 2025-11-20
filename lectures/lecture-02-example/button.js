class Button {
  type = "button"
  className = ""
  children = ""
  onClick = null

  template = function () {
    return `<button type="${this.type}" class="${this.className}">${this.children}</button>`;
  }

  constructor(props) {
    const {
      type,
      ...rest
    } = props;

    if (type !== "button" || type !== "submit" || type !== "reset") {
      throw new TypeError("Invalid type");
    }
  }

  render(container) {
    container.innerHTML = this.template();
    this.element = container.querySelector("button");
    this.element.onclick = this.onClick;
  }
}

const container = document.querySelector("#container");
const button = new Button({
  children: "Click me",
  className: "button",
  onClick: () => {
    console.log("Button clicked");
  },
});

button.render(container);

container.innerHTML = "";

// Garbage collection
// Если у меня нет ссылок на объект, то он будет удален из памяти
button = null;
