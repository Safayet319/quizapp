import Quiz from "./Quiz.js";
import Questions from "./Questions.js";

// let question1 = new Questions('HTML STANDS FOR', [
//     'Hyper Text Markup Language ',
//     'Hyper Text Manupulation Lang',
//     'Hyper Transfer Manupulation Language',
//     'No Answer'
// ],
// 0)
// let question2 = new Questions('is javascript a programming language', [
//     'Programming Language',
//     'Query Language',
//     'Scripting Language',
//     'text-based programming language'
// ],
// 3)

// let question3 = new Questions('Among unary operation which operator represents increment?', [
//     '--',
//     '++',
//     '-',
//     '!'
// ],
// 1)


// let quizList = [question1, question2, question3];
// let myQuiz = new Quiz(quizList)
// console.log(myQuiz);
// myQuiz.getCurrentQuestion()
// console.log(myQuiz);

// ! pick dom element

let App = (()=>{
let quizElement = document.querySelector('.quiz')
let quizQs = document.querySelector('.quiz__question')
let progressInner = document.querySelector('.progress__inner')
let quizTagline = document.querySelector('.quiz__tagline')
let choises = document.querySelector('.quiz__choices')
let tracker = document.querySelector('.quiz__tracker')
let next = document.querySelector('.next')
let restart = document.querySelector('.restart')

// ! ques list

let question1 = new Questions('HTML STANDS FOR', 
    [
        'Hyper Text Markup Language ',
        'Hyper Text Manupulation Lang',
        'Hyper Transfer Manupulation Language',
        'No Answer'
    ],
    0);
let question2 = new Questions('is javascript a programming language', 
    [
        'Programming Language',
        'Query Language',
        'Scripting Language',
        'text-based programming language'
    ],
    3);

let question3 = new Questions('Among unary operation which operator represents increment?', 
    [
        '--',
        '++',
        '-',
        '!'
    ],
    1);


let setElement = (elem,value)=>{
  
   elem.innerHTML = value 

}

let listener = ()=>{
    next.addEventListener('click',function(){
        let selectRadioButton = document.querySelector('input[name="choice"]:checked')
      
        // console.log(selectRadioButton);
        if(selectRadioButton){
            let answer = Number(selectRadioButton.getAttribute('data-order')) 
            // console.log(answer);
            quiz.increaseScore(answer);
            renderAll()
        }
       

    })

    restart.addEventListener('click', function() {

        quiz.reset();
        renderAll();
        next.style.display = 'block'
        choises.style.display = 'block'


    })
}

let quiz = new Quiz([question1, question2, question3])
let renderQuyestion = ()=>{
    let currQues = quiz.getCurrentQuestion().question
    // quizQs.innerHTML = currQues
    setElement(quizQs,currQues)
}

let renderChoiseelement = ()=>{
    let markUp = ''
    let currentChoises = quiz.getCurrentQuestion().choises
    // console.log(currentChoises);
    currentChoises.forEach((elem, index)=>{
        markUp +=`
        <li class="quiz__choice">
        <input
            type="radio"
            name="choice"
            class="quiz__input"
            data-order="${index}"
            id="choice${index}"
        />
        <label for="choice${index}" class="quiz__label">
            <i></i>
          ${elem}
            
        </label>
    </li>
        `
    })
    // choises.innerHTML = markUp
    setElement(choises,markUp)

 
}

let renderTracker = () =>{
    let index = quiz.currentIndex
    // console.log(index);
    // tracker.innerHTML = `${index + 1} of ${quiz.questions.length}`
    setElement(tracker,`${index + 1} of ${quiz.questions.length}`)

}

let renderWidth = (width,maxPercent) => {
let loadingBar = setInterval(function(){
    if(width > maxPercent){
        clearInterval(loadingBar)
    }
    else{
        width++
        progressInner.style.width = width + '%'

    }
})

}




let renderProcess = () =>{
    let currentWidth = Math.round((quiz.currentIndex/quiz.questions.length)*100)
    // console.log(currentWidth); 
    renderWidth(0,currentWidth)
}



const renderAll = () =>{
    if(quiz.hasEnded()){
        setElement(quizQs,'Congratulation')
        setElement(quizTagline, 'Quiz ended')
        setElement(tracker,`Yout Score is: ${quiz.score}`)
        next.style.display = 'none'
        choises.style.display = 'none'
        renderProcess()

        
    }
    else{
        renderProcess()

        renderChoiseelement()
        
        renderQuyestion()
        
        renderTracker()
    }
}

renderAll()
listener()

})()
