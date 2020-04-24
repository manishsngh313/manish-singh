var display = document.getElementById("display").innerText;
var inputs = document.querySelectorAll('#input >p');
console.log(inputs);
var op1 = 0,op2= null,operator = null,result = null;

 for (var i = 0; i<inputs.length; i++){
    inputs[i].addEventListener('click' , function(){
        var input = this.getAttribute('data-attribute');

        switch(input) {
            case  'ac':
                display = "";
                document.getElementById('display').innerText = display;
                break;
            case '+/-':
                display = -(parseFloat(display));
                display.toString();
                document.getElementById('display').innerText = display;
                break;
            case '%':
                operator = input;
                op1 = parseFloat(display);
                display = "";
                document.getElementById('display').innerText = display;
                break;
            case '/':
                operator = input;
                op1 = parseFloat(display);
                display = "";
                document.getElementById('display').innerText = display;
                break;
            case '7':
                fornum(input);
                break
            case '8':
                fornum(input);
                break;
            case '9':
                fornum(input);
                break;
            case '*':
                operator = input;
                op1 = parseFloat(display);
                display = "";
                document.getElementById('display').innerText = display;
                break;
            case '4':
                fornum(input);
                break;
            case '5':
                fornum(input);
                break;
            case '6':
                 fornum(input);
                break;
            case '-':
                 operator = input;
                 op1 = parseFloat(display);
                 display = "";
                document.getElementById('display').innerText = display;
                break;
            case '1':
                fornum(input);
                break;
            case '2':
                fornum(input);
                break;
            case '3':
                fornum(input);
                // display += input;
                // document.getElementById('display').innerText = display;
                break;
            case '+':
                operator = input;
                op1 = parseFloat(display);
                display = "";
                document.getElementById('display').innerText = display;
                break;
            case '0':
                if(parseFloat(display)>0){
                    display += input;
                    document.getElementById('display').innerText = display;
                }
                else {
                    display = 'syntax error';
                    document.getElementById('display').innerText = display;
                }
                break;
            case '.':
                if (display = ""){
                    document.getElementById('display').innerText = 'Syntax Error';
                }
                else{
                    display += input;
                    document.getElementById('display').innerText = display;
                }
                break;
            case '=':
                op2 = parseFloat(display);
                result = op1.toString() + operator + op2.toString();
                document.getElementById('display').innerText = eval(result);
                display =  document.getElementById('display').innerText
                break;
    }
    } ) 
    ;
    

    
    }
    function foroperator(input,display){
        operator = input;
        op1 = parseFloat(display);
        display = "";
        document.getElementById('display').innerText = display;
    }
    function fornum(input){
        display += input;
        document.getElementById('display').innerText = display;
    }
    
