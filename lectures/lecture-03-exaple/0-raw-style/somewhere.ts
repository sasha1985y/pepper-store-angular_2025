class UserPresenter {
  user: UserInterface;
  container: HTMLElement;

  constructor(container) {
    const myUser = new User("John", 30);
    myUser.setName("Jane");

    const userCard = new UserCard({
      user: myUser,
      className: "user-card",
    });

    userCard.render(container as HTMLElement);

    userCard.onClick = function () {
      myUser.setName("John");
    }

    myUser.onSetName = function () {
      userCard.render(container as HTMLElement);
    }
  }
}
