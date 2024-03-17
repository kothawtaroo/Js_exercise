function nextAlert(){
    alert('This is External js');
}
document.getElementById('head').innerHTML="Hello This is MTT Computing";
document.getElementById('head').style.color="red";

function showDateTime(){
    document.getElementById('para1').innerHTML=Date();
}

function showMessage(){
    var number = prompt('Please Enter Number')
    answer= number*3560
    alert("Today Currency is "   + answer+ " MMK")
}

function calculate(){
    var num1 = prompt("First Number")
    var num2 = prompt("Second Number")
    answer2= parseInt(num1)+parseInt(num2)
    alert(answer2)
}

