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

  doCharity() {
    return "I like to help people."
  }

  releasePressStatement() {
    return "You will see great things from Scruber."
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }

  sayHello() {
    return "Welcome aboard!"
  }
}

class Ceo extends BoardMember {
}
