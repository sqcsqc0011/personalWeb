function baseAnswer(num){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";	
    //get question
	var para=document.createElement("p");
	var question = getQuestion(num);	
	para.appendChild(document.createTextNode(question));	
	var element=document.getElementById("modal-question");
	element.appendChild(para);
	
	//get answer and solution
	switch(num){
		case "1":
		       base1();
			   break;
		case "2":
		       base2();
			   break;
		case "3":
		       base3();
			   break;
		case "4":
		       base4();
			   break;
		case "5":
		       base5();
			   break;
		case "6":
		       base6();
			   break;
		case "7":
		       base7();
			   break;
		case "8":
		       base8();
			   break;
		case "9":
		       base9();
			   break;
		case "10":
		       base10();
			   break;
		case "11":
		       base11();
			   break;			   
		default:break;
	}
	
	$('#baseAnswer').modal('show');
}

function getQuestion(num){
	var questionArray = new Array();
	questionArray[0] = "No question";
	questionArray[1] = "Write a JavaScript program to display the current day and time in the following format.";
	questionArray[2] = "Write a JavaScript program to print the contents of the current window.";	
	questionArray[3] = "Write a JavaScript program to get the current date. ";
	questionArray[4] = "Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. ";
	questionArray[5] = "Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. ";
	questionArray[6] = "Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. ";
	questionArray[7] = "Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050. ";
	questionArray[8] = "Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message 'Good Work' otherwise display a message 'Not matched'";
	questionArray[9] = "Write a JavaScript program to calculate days left until next Christmas. ";
	questionArray[10] = "Write a JavaScript program to calculate multiplication and division of two numbers (input from user). ";
	questionArray[11] = "Write a JavaScript program to convert temperatures to and from celsius, fahrenheit. ";

	var result = questionArray[num];
	return result;
}

function base1(){
	var d = new Date(),
	seconds = d.getSeconds().toString().length == 1 ? '0'+d.getSeconds() : d.getSeconds();
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
    ampm = d.getHours() >= 12 ? 'pm' : 'am';
	if(hours > 12 ) hours = hours -12;
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sunday','Monday','Tuesday','Wednsday','Thursday','Friday','Saturday'];
	var answer = new Array();
	answer[0] = 'Today is : ' + days[d.getDay()];
	answer[1] = 'Current time is : ' + hours + ampm + ':' + minutes + ':'+ seconds;

	//show result
    var para = document.createElement("p");
	para.appendChild(document.createTextNode(answer[0]));	
	var element = document.getElementById("modal-answer");
	element.appendChild(para);
	var para2=document.createElement("p");
	para2.appendChild(document.createTextNode(answer[1]));	
	var element=document.getElementById("modal-answer");
	element.appendChild(para2);	
}

function base2(){
	var button = "<button type='button' onclick='print_current_page()' class = 'btn btn-primary'>Print</button>";
	$( "#modal-answer" ).append(button);
	//window.print();
}

function print_current_page(){
	window.print();
}


function base3(){
	var today = new Date();
	dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear(); 
	if(dd < 10) dd = '0' + dd;
	if(mm < 10) mm = '0' + mm;
	today = mm +'-'+dd+'-'+yyyy;
	$( "#modal-answer" ).append(today);
};

function base4(){
	var side1 = 5;   
	var side2 = 6;   
	var side3 = 7;   
	var perimeter = (side1 + side2 + side3)/2;  
	var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
    $( "#modal-answer" ).append(area);	
};

function base5(){
	var text = 'w3resource';
	$("#modal-answer" ).append(text);

	var timer1 = setInterval(function () 
	{
	   document.getElementById('modal-answer').innerHTML="";
	   text = text[text.length - 1] + text.substring(0, text.length - 1);
	   $( "#modal-answer" ).append(text);
	}, 200);
};


function base6(){
	var element = "Year: <input type='text' id='yearSubmit'>";
	element += "<button type='button' onclick='leapYear()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";
	$("#modal-answer" ).append(element);
};

function leapYear(){
	var year = document.getElementById("yearSubmit").value;
	var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    alert(x);
}

function base7(){
	var year = 2014;
	for ( year = 2014; year <= 2050; year++)  
    {  
		var d = new Date(year, 0, 1);  
		if ( d.getDay() == 0 )  
			$("#modal-answer" ).append("In "+ year +", 1st January is being a Sunday<br>");  
    } 
};

function base8(){
	var element = "Guess: <input type='text' id='numGuess'>";
	element += "<button type='button' onclick='guessNumber()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";
	$("#modal-answer" ).append(element); 
};

function guessNumber(){
	var num = Math.ceil(Math.random() * 10);
	var gnum = document.getElementById("numGuess").value;
	if (gnum == num)
	   alert('Matched');
	else
	   alert('Not matched, the number was ' + num);
}

function base9(){
	today=new Date();  
	var cmas=new Date(today.getFullYear(), 11, 25);  
	if (today.getMonth()==11 && today.getDate()>25)   
	{  
	   cmas.setFullYear(cmas.getFullYear()+1);   
	}    
	var one_day=1000*60*60*24;  
	$("#modal-answer" ).append(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+  
	" days left until Christmas!");  
};
function base10(){
	var element = "Number 1: <input type='text' id='number1'><br>";
	element += "Number 2: <input type='text' id='number2'>";
	element += "<button type='button' onclick='multiplyNumbers()' class = 'btn left-btn btn-sm btn-primary'>Multiply</button>";
	element += "<button type='button' onclick='divideNumbers()' class = 'btn left-btn btn-sm btn-primary'>Divide</button>";
	element += "<br>Result : <span id='numResult'></span>";
	$("#modal-answer" ).append(element);
};

function multiplyNumbers()
{
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    document.getElementById("numResult").innerHTML = num1 * num2;
}

function divideNumbers() 
{ 
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    document.getElementById("numResult").innerHTML = num1 / num2;
}

function base11(){
	var ctof60 = cToF(60);  
	$("#modal-answer" ).append(ctof60 + "<br>");
    var ftoc45 = fToC(45); 
	$("#modal-answer" ).append(ftoc45 + "<br>");
};

function cToF(celsius)   
{  
  var cTemp = celsius;  
  var cToFahr = cTemp * 9 / 5 + 32;  
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';  
  return message;  
}  
  
function fToC(fahrenheit)   
{  
  var fTemp = fahrenheit;  
  var fToCel = (fTemp - 32) * 5 / 9;  
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';  
  return message;  
}   

function funcAnswer(num){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";	
    //get question
	var para=document.createElement("p");
	var question = getFuncQuestion(num);	
	para.appendChild(document.createTextNode(question));	
	var element=document.getElementById("modal-question");
	element.appendChild(para);
	
	//get answer and solution
	switch(num){
		case "1":
		       func1();
			   break;
		case "2":
		       func2();
			   break;
		case "3":
		       func3();
			   break;
		case "4":
		       func4();
			   break;
		case "5":
		       func5();
			   break;
		case "6":
		       func6();
			   break;
		case "7":
		       func7();
			   break;
		case "8":
		       func8();
			   break;
		case "9":
		       func9();
			   break;
		case "10":
		       func10();
			   break;
		case "11":
		       func11();
			   break;
		case "12":
		       func12();
			   break;			   
		default:break;
	}
	
	$('#baseAnswer').modal('show');
}

function getFuncQuestion(num){
	var questionArray = new Array();
	questionArray[0] = "No question";
	questionArray[1] = "Write a JavaScript function that reverse a number.";
	questionArray[2] = "Write a JavaScript function that checks whether a passed string is palindrome or not?";	
	questionArray[3] = "Write a JavaScript function that generates all combinations of a string";
	questionArray[4] = "Write a JavaScript function that returns a passed string with letters in alphabetical order";
	questionArray[5] = "Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. ";
	questionArray[6] = "Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.";
	questionArray[7] = "Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string";
	questionArray[8] = "Write a JavaScript function that accepts a number as a parameter and check the number is prime or not";
	questionArray[9] = "Write a JavaScript function which accepts an argument and returns the type";
	questionArray[10] = "Write a JavaScript function which returns the n rows by n columns identity matrix.";
	questionArray[11] = "Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.";
	questionArray[12] = "Write a JavaScript function which says whether a number is perfect";

	var result = questionArray[num];
	return result;
}

function func1(){
	var element = "Number: <input type='text' id='number'>";
	element += "<button type='button' onclick='reverse_a_number()' class = 'btn left-btn btn-sm btn-primary'>Reverse</button>";	
	element += "<br>Result : <span id='numResult'></span>";
	$("#modal-answer" ).append(element);
}

function func2(){
	var element = "String: <input type='text' id='stringCheck'>";
	element += "<button type='button' onclick='checkPalindrome()' class = 'btn left-btn btn-sm btn-primary'>Check</button>";	
	element += "<br>Result : <span id='checkResult'></span>";
	$("#modal-answer" ).append(element);
}

function func3(){
	var element = "String: <input type='text' id='stringSubs'>";
	element += "<button type='button' onclick='stringSubs()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function stringSubs()  
{  
    var str1 = document.getElementById("stringSubs").value;
	var array1 = [];  
	for (var x = 0, y=1; x < str1.length; x++,y++)   
    {  
	   array1[x]=str1.substring(x, y);  
	}  
	var combi = [];  
	var temp= "";  
	var slent = Math.pow(2, array1.length);  
	  
	for (var i = 0; i < slent ; i++)  
	{  
		temp= "";  
		for (var j=0;j<array1.length;j++) {  
			if ((i & Math.pow(2,j))){   
				temp += array1[j];  
			}  
		}  
		if (temp !== "")  
		{  
			combi.push(temp);  
		}  
	}
	$("#stringResult" ).append(combi.join("\n"));	
}  

function checkPalindrome(){
	var str_entry = document.getElementById("stringCheck").value;
	var result = check_Palindrome(str_entry);
	if( result == true) document.getElementById("checkResult").innerHTML = "true";
	else document.getElementById("checkResult").innerHTML = "false";;
}

function reverse_a_number()
{
	var n = document.getElementById("number").value;
	n = n + "";
	document.getElementById("numResult").innerHTML = (n.split("").reverse().join(""));
}

function check_Palindrome(str_entry){  
// Change the string into lower case and remove  all non-alphanumeric characters  
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');  
    var ccount = 0;  
// Check whether the string is empty or not  
    if(cstr==="") {  
        return false;  
    }  
// Check if the length of the string is even or odd   
    if ((cstr.length) % 2 === 0) {  
        ccount = (cstr.length) / 2;  
    } else {  
// If the length of the string is 1 then it becomes a palindrome  
        if (cstr.length === 1) {  
            return true;  
        } else {  
// If the length of the string is odd ignore middle character  
            ccount = (cstr.length - 1) / 2;  
        }  
    }  
// Loop through to check the first character to the last character and then move next  
    for (var x = 0; x < ccount; x++) {  
// Compare characters and drop them if they do not match   
        if (cstr[x] != cstr.slice(-1-x)[0]) {  
            return false;  
        }  
    }  
    return true;  
} 

function func4(){
	var element = "String: <input type='text' id='stringEntry'>";
	element += "<button type='button' onclick='alphabet_order()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function alphabet_order()  
{  
    var str = document.getElementById("stringEntry").value;
	str = str.split('').sort().join(''); 
    document.getElementById("stringResult").innerHTML	= str;
}  

function func5(){
	var element = "String: <input type='text' id='stringEntry'>";
	element += "<button type='button' onclick='uppercase()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function uppercase()  
{  
	var str = document.getElementById("stringEntry").value;
	var array1 = str.split(' ');  
	var newarray1 = [];  
		  
	for(var x = 0; x < array1.length; x++){  
		newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));  
	}  
	document.getElementById("stringResult").innerHTML = newarray1.join(' ');  
}

function func6(){
	var element = "String: <input type='text' id='stringEntry'>";
	element += "<button type='button' onclick='find_longest_word()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function find_longest_word()  
{  
    var str = document.getElementById("stringEntry").value;
	var array1 = str.match(/\w[a-z]{0,}/gi);  
	var result = array1[0];  
	  
	for(var x = 1 ; x < array1.length ; x++)  
	{  
	  if(result.length < array1[x].length)  
	  {  
	    result = array1[x];  
	  }   
	}  
	document.getElementById("stringResult").innerHTML= result; 
}  

function func7(){
	var element = "String: <input type='text' id='stringEntry'>";
	element += "<button type='button' onclick='vowel_count()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function vowel_count()  
{  
    var str1 = document.getElementById("stringEntry").value;
    var vowel_list = 'aeiouAEIOU';  
    var vcount = 0;  
    
    for(var x = 0; x < str1.length ; x++)  
    {  
        if (vowel_list.indexOf(str1[x]) !== -1)  
        {  
            vcount += 1;  
        }  
    
    }  	
	document.getElementById("stringResult").innerHTML = vcount; 
} 

function func8(){
	var element = "Number: <input type='number' id='stringEntry'>";
	element += "<button type='button' onclick='check_prime()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function check_prime()  
{  
    var n = document.getElementById("stringEntry").value;
	var result = true;
	if( n == 1 || n == 2){
		result = true;
	}else {
		for( var i = 2; i < Math.sqrt(n) + 1; i++){
			if( n%i == 0) result = false;
		}
	}
	document.getElementById("stringResult").innerHTML = result; 
}  

function func9(){
	var element = "String: <input type='text' id='stringEntry'>";
	element += "<button type='button' onclick='detect_data_type()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function detect_data_type()  
{  
    var value = document.getElementById("stringEntry").value;
	var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;  
		  
	if (typeof value === "object" || typeof value === "function")   
	{  
		for (x = 0, len = dtypes.length; x < len; x++)   
		{  
			if (value instanceof dtypes[x])  
			{  
				document.getElementById("stringResult").innerHTML = dtypes[x];  
				return;
			}  
		}  
	}        
    var result =  typeof value;
    document.getElementById("stringResult").innerHTML = result;	
	return;
}

function func10(){
	var element = "Number: <input type='number' id='stringEntry'>";
	element += "<button type='button' onclick='identity_matrix()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function identity_matrix()  
{  
    document.getElementById("stringResult").innerHTML = "";
    var n = document.getElementById("stringEntry").value;
	$("#stringResult" ).append('<br>');
    var i;  
    var j;  
  
    for (i=0; i < n; i++)  {   
        for (j=0; j < n; j++)  {  
            if (i == j) $("#stringResult" ).append(' 1 ');   
            else $("#stringResult" ).append(' 0 ');
		}   
        $("#stringResult" ).append('<br>');  
    }
}

function func11(){
	alert("Uncompleted");
}

function func12(){
	var element = "Number: <input type='number' id='stringEntry'>";
	element += "<button type='button' onclick='is_perfect()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function is_perfect()  
{  
    var n = document.getElementById("stringEntry").value;
	var result = false;
	var sum = 0;
	
	for( var i = 1; i < n/2 + 1; i++){
		if( n%i == 0) sum = sum + i;
	}
	
	if ( sum == n && sum != 0){
		result = true;
	}
	document.getElementById("stringResult").innerHTML = result; 
}

function porkAnswer(num){
    switch(num){
		case '1':
			porkAnswer1();break;
		case '2':
			porkAnswer2();break;
		case '3':
			porkAnswer3();break;
		default:
			break;
	}    
	$('#porkCard').modal('show');
}

function porkAnswer1(){
	document.getElementById("pokerAnswer").innerHTML = "";
	for( var i = 1 ; i <= 4; i++){
		for( var j = 1; j <= 13; j++){
			if( i == 1) {
			    if( j == 1 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','A'));
				else if( j == 11 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','J'));
				else if( j == 12 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','Q'));
				else if( j == 13 ) {
					$("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','K'));
					$("#pokerAnswer" ).append("<br>");}
				else $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades',j));
			}
			if( i == 2) {
			    if( j == 1 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','A'));
				else if( j == 11 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','J'));
				else if( j == 12 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','Q'));
				else if( j == 13 ) {
					$("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','K'));
					$("#pokerAnswer" ).append("<br>");}
				else $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts',j));
			}
			if( i == 3) {
			    if( j == 1 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','A'));
				else if( j == 11 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','J'));
				else if( j == 12 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','Q'));
				else if( j == 13 ) {
					$("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','K'));
					$("#pokerAnswer" ).append("<br>");}
				else $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds',j));
			}
			if( i == 4) {
			    if( j == 1 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs','A'));
				else if( j == 11 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs','J'));
				else if( j == 12 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs','Q'));
				else if( j == 13 ) {
					$("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs','K'));
					$("#pokerAnswer" ).append("<br>");}
				else $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs',j));
			}			
		}
	}
}

function porkAnswer2(){
	document.getElementById("pokerAnswer").innerHTML = "";
	var result = randomCommon(1, 14, 10);
	for( var j = 0; j < result.length; j++){
		if( result[j] == '1' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','A'));
		else if( result[j] == '11' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','J'));
		else if( result[j] == '12' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','Q'));
		else if( result[j] == '13' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','K'));
		else $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades',result[j]));
	}
	$("#pokerAnswer" ).append("<br>");
	result = randomCommon(1, 14, 4);
	for( var j = 0; j < result.length; j++){
		if( result[j] == '1' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','A'));
		else if( result[j] == '11' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','J'));
		else if( result[j] == '12' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','Q'));
		else if( result[j] == '13' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','K'));
		else $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts',result[j]));
	}
	$("#pokerAnswer" ).append("<br>");
	result = randomCommon(1, 14, 6);
	for( var j = 0; j < result.length; j++){
		if( result[j] == '1' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','A'));
		else if( result[j] == '11' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','J'));
		else if( result[j] == '12' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','Q'));
		else if( result[j] == '13' ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','K'));
		else $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds',result[j]));
	}
}

function porkAnswer3(){
	document.getElementById("pokerAnswer").innerHTML = "";
	result = randomCommon(1, 53, 20);
	for( var nn = 0; nn < 10; nn++){
		var i = parseInt((result[nn]-1)/13) + 1;
		var j = parseInt((result[nn]-1)%13) + 1;
		getPorkPic(i, j);	    
	}
	$("#pokerAnswer" ).append("<br>");	
	for( var nn = 10; nn < 14; nn++){
		var i = parseInt((result[nn]-1)/13) + 1;
		var j = parseInt((result[nn]-1)%13) + 1;
		getPorkPic(i, j);		    
	}
	$("#pokerAnswer" ).append("<br>");
	for( var nn = 14; nn < 20; nn++){
		var i = parseInt((result[nn]-1)/13) + 1;
		var j = parseInt((result[nn]-1)%13) + 1;
		getPorkPic(i, j);	    
	}
}

function getPorkPic(i, j){
	if( i == 1) {
	if( j == 1 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','A'));
		else if( j == 11 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','J'));
		else if( j == 12 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','Q'));
		else if( j == 13 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades','K'));
		else $("#pokerAnswer" ).append(Poker.getCardImage(40,'spades',j));
	}
	if( i == 2) {
		if( j == 1 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','A'));
		else if( j == 11 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','J'));
		else if( j == 12 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','Q'));
		else if( j == 13 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts','K'));
		else $("#pokerAnswer" ).append(Poker.getCardImage(40,'hearts',j));
	}
	if( i == 3) {
		if( j == 1 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','A'));
		else if( j == 11 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','J'));
		else if( j == 12 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','Q'));
		else if( j == 13 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds','K'));
		else $("#pokerAnswer" ).append(Poker.getCardImage(40,'diamonds',j));
	}
	if( i == 4) {
		if( j == 1 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs','A'));
		else if( j == 11 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs','J'));
		else if( j == 12 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs','Q'));
		else if( j == 13 ) $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs','K'));
		else $("#pokerAnswer" ).append(Poker.getCardImage(40,'clubs',j));
	}
}

function randomCommon(min, max, n){
	if( n > (max - min + 1) || max < min){
		return null;
	}
	var result = new Array(n);
	var count = 0;
	while( count < n) {
		var num = parseInt((Math.random() * (max - min)) + min);
		var checkDouble = true;
		for ( var j = 0; j < n; j++){
			if( num == result[j]){
				checkDouble = false;
				break;
			}
		}
		if(checkDouble){
			result[count] = num;
			count++;
		}
	}
	return result;
}

function coinsAnswer(){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";	
	
	var element = "<br>There are many 1c 5c 25c and 50c coins";
	element += "<br>Total Coins: <input type='number' id='coinsNumber'>";
	element += "Total Cents: <input type='number' id='centNumber'>";
	element += "<button type='button' onclick='coinsPick()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	$("#modal-question" ).append(element);
	var element1 = "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element1);
	
	$('#baseAnswer').modal('show');
}

function coinsPick(){
	var count = document.getElementById('coinsNumber').value;
	var money = document.getElementById('centNumber').value;
	var result = pickCoins(count,money);
	if (result.length == 0) result = "No Solution!"
	document.getElementById('stringResult').innerHTML = result;
}

function pickCoins( count, money){
	var needAdd = money - count;
	var result = new Array();
	for ( var count50 = 0; count50 <= needAdd/49; count50++){
		for( var count25 = 0; count25 <= (needAdd - count50*49)/24; count25++){
			for(var count5 = 0; count5 <= (needAdd - count50*49 - count25*24)/4; count5++){
				if( count5*4 + count50*49 + count25*24 == needAdd) 
					{
						var count1 = count - count5 - count25 - count50;
						var element = "<br>"+"1coins: "+count1+" ,5coins: "+count5+" ,25coins: "+count25+" ,50coins: "+count50;
						result.push(element);
					}
			}
		}
	}
	return result;
}

function recurAnswer(num){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";
	
	var recurQuestion = getRecurQuestion(num);
	$('#modal-question').append(recurQuestion);
	
	switch (num){
		case '1':
			recurAnswer1();break;
		case '2':
			recurAnswer2();break;
		case '3':
			recurAnswer3();break;
		case '6':
			recurAnswer6();break;
		case '9':
			recurAnswer9();break;
		default: break;
	}
	
	$('#baseAnswer').modal('show');
}

function getRecurQuestion(num){
	var recurQuestion = new Array();
	recurQuestion[1] = "Write a JavaScript program to calculate the factorial of a number.";
	recurQuestion[2] = "Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers";
	recurQuestion[3] = "Write a JavaScript program to get the integers in range (x, y).";
	recurQuestion[6] = "Write a JavaScript program to get the first n Fibonacci numbers.";
	recurQuestion[9] = "Write a merge sort program in JavaScript.";

	return recurQuestion[num];
}

function recurAnswer1(){
	var element = "Number: <input type='number' id='stringEntry'>";
	element += "<button type='button' onclick='factorial()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function factorial(){
	var number = parseInt(document.getElementById('stringEntry').value);
	var result = 1;
	for( var i = 1; i <= number; i++){
		result = result * i;
	}
	document.getElementById('stringResult').innerHTML = result;
}

function recurAnswer2(){
	var element = "Number1: <input type='number' id='stringEntry1'>";
	element += "Number2: <input type='number' id='stringEntry2'>";
	element += "<button type='button' onclick='recurAnswer2Button()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function recurAnswer2Button(){
	var number1 = parseInt(document.getElementById('stringEntry1').value);
	var number2 = parseInt(document.getElementById('stringEntry2').value);
	var result = gcd(number1,number2);
	document.getElementById('stringResult').innerHTML = result;
}

function gcd(a,b){
	if ( b == 0 ) return a;
	return gcd(b,a%b);
}

function recurAnswer3(){
	var element = "Number1: <input type='number' id='stringEntry1'>";
	element += "Number2: <input type='number' id='stringEntry2'>";
	element += "<button type='button' onclick='recurAnswer3Button()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function recurAnswer3Button(){
	var number1 = parseInt(document.getElementById('stringEntry1').value);
	var number2 = parseInt(document.getElementById('stringEntry2').value);
	var result = range(number1,number2);
	document.getElementById('stringResult').innerHTML = result;
}

function range (a,b){
	var num = b - a;
	var result = new Array();
	if( num >= 2){
		for ( var i = 1; i < num; i++){
			result.push( a + i);
		}
		return result;
	}else return [];
}

function recurAnswer6(){
	var element = "Number1: <input type='number' id='stringEntry'>";
	element += "<button type='button' onclick='recurAnswer6Button()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function recurAnswer6Button(){
	var number = parseInt(document.getElementById('stringEntry').value);
	var result = getFibonacci(number);
	document.getElementById('stringResult').innerHTML = result;
}

function getFibonacci(n){
	var result = new Array();
	if( n == 1){
		return [0,1];
	}else {
		result = getFibonacci(n - 1);
		result.push(result[n-1]+result[n-2]);
		return result;
	}
}

function recurAnswer9(){
	var element = "Array: [34,7,23,32,5,62]";
	element += "<button type='button' onclick='recurAnswer9Button()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
}

function recurAnswer9Button(){
	var arr = [34,7,23,32,5,62];
	var result = sortArray(arr);
	document.getElementById('stringResult').innerHTML = result;
}

function sortArray(arr){
	var result = new Array();
	result = arr.sort(sortNumber);
	return result;
}

function sortNumber(a,b){
	return a - b;
}

function conAnswer(num){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";
	
	var conQuestion = getConQuestion(num);
	$('#modal-question').append(conQuestion);
	
	switch (num){
		case '8':
			conAnswer8();break;
		default: break;
	}
	
	$('#baseAnswer').modal('show');
}

function getConQuestion(num){
	var conQuestion = new Array();
	conQuestion[8] = "Write a JavaScript program to find and print the first 5 happy numbers."
	conQuestion[10] = "Write a JavaScript program to construct the following pattern, using a nested for loop."

	return conQuestion[num];
}

function conAnswer8(){
	var count = 0;
	var result = new Array();
	for(var i = 1; count <= 10; i++){
		if(isHappyNumber(i) == true) {
			count++;
			result.push(i);
		}
	}
	document.getElementById('modal-answer').innerHTML = result;
}

function isHappyNumber( n ){
	if( n < 10){
		if( n == 1 || n == 7) return true;
		else return false;
	}else{
		var sum = 0;
		while(n/10 >= 1){
			sum += (parseInt(n%10))*(parseInt(n%10));
			n = parseInt(n/10);
		}
		sum += (parseInt(n%10))*(parseInt(n%10));
		sum = parseInt(sum);
		return isHappyNumber( sum );
	}
}

function convertTest()
{
	var num=document.getElementById("convertIn").value;
	var type=document.getElementById("convertTitle");
	var tynum,to;
	for(var i=0;i<type.length;i++)
	{ 
		if(type[i].selected)
		tynum=parseInt(type[i].value);
	}
	switch(tynum)
	{
		case(1):to=parseInt(num).toString(2);break;
		case(2):to=parseInt(num).toString(8);break;
		case(3):to=parseInt(num).toString(16);break;
		case(4):to=parseInt(num,2);break;
		case(5):to=parseInt(num,8);break;
		case(6):to=parseInt(num,16);break;
		case(7):to=parseInt(num,2).toString(8);break; 
		case(8):to=parseInt(num,8).toString(2);break; 
		case(9):to=parseInt(num,2).toString(16);break; 
		case(10):to=parseInt(num,16).toString(2);break; 
		case(11):to=parseInt(num,8).toString(16);break; 
		case(12):to=parseInt(num,16).toString(8);break; 
	}
	if(isNaN(to)) to="Invalid Number";
	document.getElementById("convertOut").innerHTML = to;
}


function arrayAnswer(num){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";
	
	var arrayQuestion = getArrayQuestion(num);
	$('#modal-question').append(arrayQuestion);
	
	switch (num){
		case '1':
			arrayAnswer1();break;
		case '39':
			arrayAnswer39();break;
		default: break;
	}
	
	$('#baseAnswer').modal('show');
}

function getArrayQuestion(num){
	var arrayQuestion = new Array();
	arrayQuestion[1]= "Write a JavaScript function to check whether an `input` is an array or not.";
	arrayQuestion[39] = " Write a JavaScript function to filter false, null, 0 and blank values from an array.";
	arrayQuestion[10] = "Write a JavaScript program to construct the following pattern, using a nested for loop."

	return arrayQuestion[num];
}

function arrayAnswer1(){
	var input = 123321;
	var element = "<br>Input is : " + input + ", data type is " + typeof input;
	$('#modal-question').append(element);
	var result = is_array(input);
	document.getElementById('modal-answer').innerHTML = result;
};

// Array 1
function is_array(input) {  
    if (toString.call(input) === "[object Array]")  
        return true;  
    return false;     
};  

function arrayAnswer39(){
	var input = [58, '', 'abcd', true, null, false, 0];
	var element = "<br>Input is : " + input + ", data type is " + typeof input;
	$('#modal-question').append(element);
	var result = input.filter(filter_array_values);
	document.getElementById('modal-answer').innerHTML = result;
}

// Array 39
function filter_array_values(input){
	if(input == false || input == null || input == 0 || input == "")
		return false;
	return true;
}

function dateAnswer(num){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";
	
	var dateQuestion = getDateQuestion(num);
	$('#modal-question').append(dateQuestion);
	
	switch (num){
		case '2':
			dateAnswer2();break;
		case '4':
			dateAnswer4();break;
		case '5':
			dateAnswer5();break;
		case '9':
			dateAnswer9();break;
		default: break;
	}
	
	$('#baseAnswer').modal('show');
}

function getDateQuestion(num){
	var dateQuestion = new Array();
	dateQuestion[2]= "Write a JavaScript function to get the current date.";
	dateQuestion[4]= "Write a JavaScript function to get the month name from a particular date";
	dateQuestion[5]= "Write a JavaScript function to get difference between two dates in days.";
	dateQuestion[9]= "";
	return dateQuestion[num];
}

function dateAnswer2(){
	var element = "Separator: <input type='text' id='stringEntry'>";
	element += "<button type='button' onclick='dateAnswer2Button()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);	
}

function dateAnswer2Button(){
	var separator = document.getElementById('stringEntry').value;
	var result = curday(separator);
	document.getElementById('stringResult').innerHTML = result;
}

function curday(separator){
	var day = new Date();
	var month = (day.getMonth() + 1) < 10 ? '0'+(day.getMonth() + 1) : (day.getMonth() + 1);
	var date = day.getDate() < 10 ? '0'+day.getDate() : day.getDate();
    var result = month + separator + date + separator + day.getFullYear();
	return result;
}

function dateAnswer4(){
    var date = new Date("12/11/2009");
	var element = date;
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
	var result = getMonthName(date);
	document.getElementById('stringResult').innerHTML = result;	
}

function getMonthName(date){
	var months = ['January','February','March','April','May',
				'June','July','Auguse','September','October','November','December'];
	return months[date.getMonth()];
}

function dateAnswer5(){
    var date1 = new Date("04/02/2014");
	var date2 = new Date("11/04/2014");
	var element = date1 + "<br>" + date2;;
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
	var result = getDiffDates(date1,date2);
	document.getElementById('stringResult').innerHTML = result;	
}

function getDiffDates(date1, date2){
	return Math.floor( (date2.getTime() - date1.getTime() )/(1000*60*60*24));
}

function writeTimer(){
	$("#timerAnswer" ).append("Timer Example!<br>");
}

function setTimeoutExample(){
	setTimeout(writeTimer, 2000);
}

var timerExample;

function setIntervalExample(){
	timerExample = setInterval(writeTimer,1000);
}

function stopIntervalExample(){
	clearInterval(timerExample);
}

function oopProblem1(){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";
	
	var shape = {
		type: 'shape',
		getType: function () {
			return this.type;
		}
	};
	
	function Triangle(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}
	Triangle.prototype = shape;
	Triangle.prototype.constructor = Triangle;
	Triangle.prototype.type = 'triangle'; 
	
	Triangle.prototype.getPerimeter = function(){
		return this.a + this.b + this.c;
	};
	
	var t = new Triangle(1,2,3);
	var result1;
	if( t.constructor === Triangle ) result1 = true;
	else result1 = false;
	
	$("#modal-answer" ).append("t.constructor === Triangle : " + result1);
	$("#modal-answer" ).append("<br>shape.isPrototypeOf(t) : " + shape.isPrototypeOf(t));
	$("#modal-answer" ).append("<br>t.getPerimeter() : " + t.getPerimeter());
	$("#modal-answer" ).append("<br>t.getType() : " + t.getType());
	
	for (var i in t) {
		if (t.hasOwnProperty(i)) $("#modal-answer" ).append('<br>' + i + ' =' + t[i]);
	}
	
	$('#baseAnswer').modal('show');
}

function oopProblem2(){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";
	
	Array.prototype.shuffle = function (){
		var j, x, i;
		for (i = this.length; i; i -= 1) {
			j = Math.floor(Math.random() * i);
			x = this[i - 1];
			this[i - 1] = this[j];
			this[j] = x;
		}
		return this;
	}

	var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	document.getElementById('modal-question').innerHTML = array1;
	document.getElementById('modal-answer').innerHTML = array1.shuffle();
	
	$('#baseAnswer').modal('show');
}


//shuffle an Array
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function oopProblem3(){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";
	
	var question = "Develop a class that:" + "<br>";
	question += "1) Has a Node object with Name, LeftChild and RightChild attributes. It is the nodes to form a binary tree (see below)." + "<br>";
	question += "2) Write a method to create a binary tree where each node can hold a string." + "<br>";
	question += "3) Write two methods to do a depth-first search and a breadth-first search on this tree for a string. " + "<br>";
	question += "4) Style counts. Please do as much object-oriented as possible, just Java.";
	
	document.getElementById("modal-question").innerHTML = question;
	
	function Node(name){
		this.name = name;
		this.leftChild = null;
		this.rightChild = null;
	}
	
	function BinarySearchTree(){
		this.root = null;
	}
	
	BinarySearchTree.prototype.add = function(name){
		if( this.root == null)	this.root = new Node(name);
		else this.insert(this.root,name);
	};
	
	BinarySearchTree.prototype.insert = function(currentNode, name){
		if( currentNode.name > name ){
			if( currentNode.leftChild == null) currentNode.leftChild = new Node(name);
			else this.insert(currentNode.leftChild, name);
		}else{
			if( currentNode.rightChild == null) currentNode.rightChild = new Node(name);
			else this.insert(currentNode.rightChild, name);
		}
	};
	
	var bstree = new BinarySearchTree();
	bstree.add('zedong');
	bstree.add('enlai');
	bstree.add('xiaoping');
	bstree.add('zemin');
	bstree.add('jinping');
	bstree.add('rongji');
	bstree.add('jiabao');
	
	var element = "<span id='dfsResult'>Depth-First Search (in order traversal)<br></span>";
	$("#modal-answer" ).append(element);	
	bstDfs(bstree.root);

	element = "<br><span id='bfsResult'>Breadth-first search<br></span>";
	$("#modal-answer" ).append(element);	
	var bfsResult = bstBfs(bstree.root);
	for ( var i = 0; i < bfsResult.length; i++){
		$("#modal-answer" ).append(bfsResult[i]+",");
	}
	
	
	$('#baseAnswer').modal('show');
}


//in order traversal dfs
function bstDfs(node){
  if(node){
    bstDfs(node.leftChild);
	$("#dfsResult").append(node.name + "<br>");
    bstDfs(node.rightChild);
  }
}

function bstBfs(node){
	var result = new Array();
	var queue = new Array();
	if( node == null) return result;
	queue.push(node);
	while( queue.length > 0){
		var currentNode = queue[0];
		result.push(currentNode.name);
		if(currentNode.leftChild != null) queue.push(currentNode.leftChild);
		if(currentNode.rightChild != null) queue.push(currentNode.rightChild);
		queue.splice(0,1);
	}
	return result;
}

function quizAnswer(){
	document.getElementById('modal-answer').innerHTML="";
	document.getElementById('modal-question').innerHTML="";
	
	var element = "Number1: <input type='number' id='stringEntry'>";
	element += "<button type='button' onclick='quizGetAnswer()' class = 'btn left-btn btn-sm btn-primary'>Submit</button>";	
	element += "<br>Result : <span id='stringResult'></span>";
	$("#modal-answer" ).append(element);
	$("#modal-answer" ).append("<br>");
	
	$('#baseAnswer').modal('show');
}

function quizGetAnswer(){
	document.getElementById("stringResult").innerHTML = "";
	var num = document.getElementById("stringEntry").value;
	$("#stringResult" ).append("<br>");
	var begin = 1;
	var circle = 0;
	var result = new Array(num);
	for( var i = 0; i <num; i++){
		result[i] = new Array();
	}
	if(num == 0) result[0][0] = 0;
	else getMatrix(num,begin, circle, result);
	for( var i = 0; i< result.length ; i++){
		for(var j = 0; j<result[i].length; j ++){
			$("#stringResult" ).append(result[i][j] + ",");
		}
		$("#stringResult" ).append("<br>");
	}
	
}

function getMatrix(num, begin, circle, result){
	num = parseInt(num);
	if(num <= 0) {
		return;
	}
	else if( num == 1 ) {
		result[circle][circle] = begin;
		return;
	}
	for( var i = 0; i <= num - 1; i++){
		result[circle][i + circle] = begin + i;
	}
	for( var i = 1; i <= num - 1; i++){
		result[i + circle][num + circle - 1] = begin + num - 1 + i;
	}
	for( var i = 1; i<= num - 1; i++){
		result[num + circle - 1][num + circle - 1 - i] = begin + 2*num - 2 + i;
	}
	for(var i = 1; i<= num - 2;i++){
		result[num + circle - 1 - i][circle] = begin + 3*num - 3 + i;
	}
	begin = begin + 4*num - 4;
	circle++;
	num = num - 2;
	getMatrix(num,begin,circle, result);
}

