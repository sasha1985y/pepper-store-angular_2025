class Dialog {
  constructor(props) {
    this.props = props;
    this.children = [new Button({
      children: "Close",
    }).template(), ...props.children];

    this._onDocumentKeyPress = this._onDocumentKeyPress.bind(this);
  }

  template = function () {
    return `<dialog ${this.open ? `open` : ``} style="position: fixed; top: 2rem;" class="${this.className}">${this.children}</dialog>`;
  }

  _onDocumentKeyPress(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  render(container) {
    container.innerHTML = this.template();
    this.element = container.querySelector("dialog");
    this.closeButton = this.element.querySelector("button");
    this.closeButton.onclick = this.close.bind(this);

    document.addEventListener("keypress", this._onDocumentKeyPress);
  }

  close() {
    this.open = false;
    this.render(container);
    document.removeEventListener("keypress", this._onDocumentKeyPress);
  }
}

const container = document.querySelector("#container");
const dialog = new Dialog({});

dialog.render(container);

document.onpopstate = () => {
  dialog.close();
  container.innerHTML = "";
  document.body.innerHTML = "";
  dialog = null;
}


// Garbage collection
dialog = null;

document;
document.onkeypress;
this;

// 1. Обработчик события все еще работает
// 2. Утечка памяти
