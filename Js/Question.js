class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Your Name");
      this.input2 = createInput("Number of your answer");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350, 0);
  
      this.question.html("What six digit number is hidden in these lines 'Shut the door, O big fat hen' ? " );
      this.question.position(150, 80);
      this.option1.html("1: 290139 " );
      this.option1.position(150, 100);
      this.option2.html("2: 340910" );
      this.option2.position(150, 120);
      this.option3.html("3: 234531 " );
      this.option3.position(150, 140);
      this.option4.html("4: 091345" );
      this.option4.position(150, 160);
  
      this.input1.position(150, 230);
      this.input2.position(350, 230);
      this.button.position(290, 300);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }