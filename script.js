function getHistory(){
  return document.getElementById('history-value').innerText;
}
function printHistory(num){
  return document.getElementById('history-value').innerText=num;
}
function getResult(){
  return document.getElementById('result-value').innerText;
}
function printResult(num){
  return document.getElementById('result-value').innerText=num;
}

let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++){
  operator[i].addEventListener('click',function(){
    if(this.id == 'clear'){
      printResult("");
      printHistory("");
    } 
    else if(this.id == 'delete'){
      let output = getResult().toString();
      if(output){
        output = output.substr(0,output.length-1);
        printResult(output);
      }
    }
    else{
      let output = getResult();
      let history = getHistory();
      if (output != ""){
        history = history + output;
        if (this.id == "="){
          let result = eval(history);
          printResult(result);
          printHistory("");
        } else{
          history = history + this.id;
          printHistory(history);
          printResult("");
        }
      }
    }
    
  })
}

let number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++){
  number[i].addEventListener('click',function(){
    let output = getResult();
    if (output != NaN){
      output += this.id;
      printResult(output);
    }
  })
}


