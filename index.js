class BoardMember {
  constructor(name, homeState, trianing) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }

  veto() {
    return "No, I must disagree"
  }

  approve() {
    return "You can do that!"
  }


}
