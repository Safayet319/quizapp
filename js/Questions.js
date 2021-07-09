export default function Quections(question,choises,answer) {
this.question = question;
this.choises = choises;
this.answer = answer;
}
Quections.prototype.isCorrect = function (choise){
   return this.answer === choise

}