class Timer {
  _time = 0;

  constructor(props) {
    this.props = props;
  }

  template = function () {
    return `<div class="${this.className}">
      <p>${this._time}</p>
    </div>`;
  }

  render(container) {
    container.innerHTML = this.template();
    this.element = container.querySelector("p");
    this.interval = setInterval(() => {
      this._time++;
      this.render(container);
    }, 1000);
  }
}
