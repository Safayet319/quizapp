// function Quiz(){
//     console.log('hello motherfucker');
// }
// export default Quiz;
import Quections from "./Questions.js";

export default function Quiz(questions){
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function(){
    // return this.questions[this.currentIndex]
    return this.questions[this.currentIndex];
}

Quiz.prototype.nextIndex = function(){
    this.currentIndex++;
}

Quiz.prototype.hasEnded = function(){
    return this.currentIndex ==this.questions.length
}

Quiz.prototype.increaseScore = function(guess){
    
    let currentQuesTion = this.getCurrentQuestion()
    if(currentQuesTion.isCorrect(guess)){
        this.score++;
    }
    this.nextIndex()
}

Quiz.prototype.reset = function(){
    this.score = 0
    this.currentIndex = 0
}