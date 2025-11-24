@Component({
  template: `
    <div [class]="className">
      <h3>{{user.name}}</h3>
      <p>Age: {{user.age}}</p>
    </div>
  `,
  selector: "user-card",
})
class UserCard {
  className: string;
}