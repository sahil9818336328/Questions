// getting all the buttons
const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
    const item = e.currentTarget.parentElement.parentElement;
//comparing item with rest of the items
    questions.forEach(function(single){
    if(single !==item){
        single.classList.remove('show-text');
        // console.log(single);
        // console.log(item);
    }
    
    });
//toggling
    item.classList.toggle('show-text');
  
    });
});