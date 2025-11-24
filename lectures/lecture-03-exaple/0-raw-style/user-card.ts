class Component {}

class UserCard extends Component {
  user: UserInterface;
  className: string;

  constructor(props: { user: UserInterface, className: string }) {
    super(props);
    this.user = props.user;
    this.className = props.className || "";
  }

  template() {
    return `
      <div class="${this.className}">
        <h3>${this.user.getName()}</h3>
        <p>Age: ${this.user.getAge()}</p>
      </div>
    `;
  }

  onClick() {
    console.log("User card clicked");
  }

  render(container: HTMLElement) {
    container.innerHTML = this.template();
    this.element = container.querySelector("div");
    this.element.onclick = this.onClick;
  }
}