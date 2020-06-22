								/*	-chapter 21-25-*/
									/*task 1*/
/*var a=prompt("enter your first name")
var b=prompt("enter your last name")
var fullName=a+b;
alert(fullName)*/
									/*task 02*/
/*var pho=prompt("what is your favourite phone model?")
for (var i = 0; i < pho.length; i++) {
}
document.write("my favourite phone is: 	"+pho+"<br>"+"length of string"+i)*/
									/*task 03*/
/*var str="pakistan"
var i = str.indexOf("n")
document.write("string: 	  "+str+"<br>"+"index of 'n':"+i)*/
									/*task 04*/
/*var str="Hello World"
var i = str.lastIndexOf("l")
document.write("string: 	  "+str+"<br>"+"Last index of 'l':"+i)*/
									/*task 05*/
/*var str="pakistani"
var i = str.charAt(3)
document.write("string: 	  "+str+"<br>"+"character at index'3':"+i)*/
									/*task 06*/
/*var a=prompt("enter your first name")
var b=prompt("enter your last name")
document.write("welcome 	"+a.concat(b));*/
									/*task 07*/
/*var str="Hyderabad"
var str1=str.replace("Hyder","Islam");
document.write(str+"<br>After replacement:"+str1)*/
									/*task 08*/
/*var message = "Ali and Sami are best friends.They play cricket and football together." 
document.write(message+"<br>")
var message1=message.split("and").join("&")		
document.write(message1+"<br>")*/
									/*task 09*/
/*var val="472"
document.write("value:"+val+"<br>")
document.write("type:"+typeof(val)+"<br>")
var val=472
document.write("value:"+val+"<br>")
document.write("type:"+typeof(val)+"<br>")*/
									/*task 10*/
/*var input=prompt("type anything ")
document.write(input.toUpperCase());*/
									/*task 11*/
/*var string=prompt("type anything ")
var sentence = string.toLowerCase().split(" ");
for(var i = 0; i< sentence.length; i++){
sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);}
document.write(sentence);*/
									/*task 12*/
/*var num =35.36
 document.write(num+"<br>")	
var num1= num.toString()
var result=num1.replace(".", "");
 document.write(result)*/								
 									/*task 13*/
/*var a=prompt("enter user name")
for (var i = 0; i <a.length; i++) {
if (a[i] == '!'|| a[i]==','||a[i]=='.'||a[i]=='@') {
prompt("please enter valid user name")
}}*/
 									/*task 14*/
/*var A = ["cake", "apple pie", "cookie", 'chips', 'patties']
var b =prompt("welcome to bakery do you want to order sir/ mam")
var c = b.toLowerCase();
var found = A.includes(c);
if (found==true) {
var a = A.indexOf(c);
document.write(c+"Is available at index 	"+a+" in our bakery")	   	}
else{document.write("we are sorry "+c+"is not available in our bakery")	}*/
 									/*task 15*/
/*var ch=prompt("enter password")
for (var i = 0; i < ch.length; i++) {
if (ch.length<6 || ch[0]>=0 || ch[0]<=9) {document.write("password cannot begin with numbers please enter   valid password")
break;}
else if ((ch>='a'&& ch<='z') || (ch>='A' && ch<='Z')||(ch>=0 && ch<=9))
{	document.write("valid password")
break;}}*/	
									/*task 16*/
/*var university="university of karachi"
 var b=university.split("");
for (var i = 0; i < b.length; i++) {
document.write(	b[i]+"<br>")
}/*
 									/*task 17*/

/*var input=prompt("type something to display its last character")
document.write("user input"+input+"<br>")
for (var i = 0; i < input.length; i++) {
 var a=input[i]}*/
 									/*task 18*/
/*var temp = 'the quick brown fox jumps over the lazy dog';
document.write(	temp+"<br>")
var count = (temp.match(/the/g) || []).length;
document.write("the occurance of the is"+count);*/

									/*chp 26-30*/
									/*task 1*/
/*var a=prompt("enter number")	
var b=   Math.abs(-a);				
document.write("Number:"+b+"<br>")
document.write("Round:"+Math.round(b)+"<br>")
document.write("Floor:"+Math.floor(b)+"<br>")
document.write("ceil:"+Math.ceil(b)+"<br>")*/
									/*task 2*/
/*var a=prompt("enter negative floating number")	
document.write("Number:"+a+"<br>")
document.write("Round:"+Math.round(a)+"<br>")
document.write("Floor:"+Math.floor(a)+"<br>")
document.write("ceil:"+Math.ceil(a)+"<br>")*/
								 	/*task 3*/
/*var val=-4	
document.write("the absolute value	"+val+"is 	"	 + Math.abs(val))*/
								 	/*task 4*/				
/*var val=Math.floor (Math.random()*7)
document.write("random dice value"+val)*/
									/*task 5*/
/*var val=Math.floor (Math.random()*3)
if (val==1) {document.write(val+"<br>random coin value:Tails")}
else if (val==2) {document.write(val+"<br>random coin value:Heads")}*/
									/*task 6*/
/*var val=Math.floor (Math.random()*101)
document.write("Randomnumber between 1 and 100: 	"+val)*/
									/*task 7*/
/*var weight=prompt("what's your weight")
var a=parseFloat(weight);
document.write("the weight of user is"+a+"kilograms")*/
									/*task 8*/
/*var val=prompt("enter a number between 1 and 10")
 val=Math.floor (Math.random()*11)
var secret=3
if (val==secret) {alert("congratulate")}
else{alert("try again")}*/
									/*chp31-34*/
									/*task 1*/
/*var d = new Date();
document.write( d);*/
									/*task 2*/
/*var month =  ["january","feburary","march","april","may","june","july","august","september","oct","november","december"]
var d = new Date();
var f= d.getMonth();
var r=month[f]
document.write("current month is:"+r);*/
									/*task 3*/
/*var day =  ["mon","tue","wed","thu","fri","sat","sun"]
var d = new Date();
var f= d.getMonth();
var r=day[f]
alert("today is "+r);*/
									/*task 4*/
/*var day =  ["mon","tue","wed","thu","fri","sat","sun"]
var d = new Date();
var f= d.getMonth();
var r=day[f]
if (r=="sat"||r=="sun") {}
alert("today is funday "+r);*/
									/*task 5*/
/*var d = new Date();
var f= d.getDate();
if (f<16) {
document.write("first fiftteen days of  month is:")	
} else {document.write("last days of month")}*/
									/*task 6*/
/*var d = new Date();
document.write( "current date"+d+"<br>");
var t=d.getTime();
document.write( "elapsed millisecond since january1 1970:"+t+"<br>");
var minutes = Math.floor(t / 60000);
document.write( "elapsed minutes since january1 1970:"+minutes+"<br>");*/
									/*task 7*/
/*var d = new Date();
var b =d.getHours();
if (b>12) {alert("its PM")} else {
	alert("its AM")}*/
									/*task 8*/
/*var laterdate = new Date("thu-dec-31-2020");
document.write( laterdate);	*/							
									/*task 9*/
/*var d = new Date();
var laterdate = new Date("jun18,2015");
var b=laterdate.getTime();
var r=d.getTime();
var diff=r-b;
var dDiff = diff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
document.write(dDiff+"days have been passed since 1st ramdam,2015");*/								/*task 10*/
									/*task 10*/
/*var y1=new Date("dec31,2014,23:59:60")								
var y2=new Date("dec5,2015,22:50:16")
var a=y1.getTime();
var b=y2.getTime();
var diff=y2-y1
var dDiff =  Math.round((diff/1000)/60);
document.write("on reference date"+y2+dDiff+"second has beenpssed since begining of 2015")*/
									/*task 11*/
/*var a = new Date();
document.write("current date"+a+"<br>")
var b= a.getHours();
var c =a.setHours(04);
document.write("1hour ago,it was"+a+c)*/
									/*task 12*/
/*var a = new Date();
document.write("current date"+a+"<br>")
var c =a.setFullYear(1920);
document.write("100yearsback,it was"+a+c)*/
									/*task 13*/
/*var age=prompt("YOUR AGE");
var a = new Date();
var b= a.getFullYear();
var diff=age-b;	
document.write("your age"+age+"<br>") 
document.write("year"+diff+"<br>") */
									/*task 14*/
 /*var name="Ali"
var month="june"
var unit=410;
var charges=16
var Net=unit*charges
var late=350
var gross=Net+late
document.write("<h1>K-ELECTRIC BILL</h1><br>")
document.write("Costumer Name:"+name+"<br>")
document.write("Month:"+month+"<br>")
document.write("Numbers of units:"+unit+"<br>")
document.write("Charges per unit:"+charges+"<br>")
document.write("Net Amount Payable (within Due Date):"+Net+"<br>")	
document.write("Late Payment Surcharge :"+late+"<br>")
document.write("Gross Amount Payable (within Due Date):"+gross+"<br>")*/ 

									/*chp35-38*/	
									/*task:1*/
/*function date(){
var date = new Date();
document.write( date);}
	date();*/
									/*task:2*/
/*function greet(b,c){
var a = b+c
document.write( "welcome:	"+a);}
greet("reshmail ","naeem");*/
									/*task:3*/
/*function add(b,c){
var a = b+c
document.write( "the addition of value" +b+"<br>& "+c+"is"+a);
return a}
add(3,5);*/
									/*task:4*/
/*function cal(b,c,op){
		if (op=='+') {
		var a = b+c
document.write( "the addition of value" +b+"<br>& "+c+"is"+a);}
	else if (op=='-') {
		var a = b-c
document.write( "the subtraction  of value" +b+"<br>& "+c+"is"+a);}
	if (op=='*') {
		var a = b*c
document.write( "the multiplication of value" +b+"<br>& "+c+"is"+a);}
	if (op=='/') {
		var a = b/c
document.write( "the division of value" +b+"<br>& "+c+"is"+a);}
	return a}
	cal(3,5,'/');*/
									/*task:5*/
/*function squ(b){
var a = b*b
document.write( "the square of value" +b+"is"+a);
return a}
squ(3);*/
									/*task:6*/
/*function factorial(a)
{ var a
var  fact=1
for(var i=1;i<=a;i++){
 fact = fact * i;}
document.write("the factorial is "+a+"is"+fact)}
factorial(7);*/								
									/*task:7*/
/*function count(s,e){
for (var i = s; i <= e; i++) {
document.write(i+",")}}
count(3,8)*/
									/*task:8 */
/*function hypo(a,f){
function square(X)
{return X*X;}
 return Math.sqrt(square(a)+square(f));}
document.write("the hypothesis of "+ hypo(6,6));*/
									/*task:9*/
/*		var h							
		var w							
function area(w,h){
var  a = (w*h);
document.write("the area of rectangle is"+a)}
area(3,5)*/
									/*task:10*/
/*function isPalindrome(str){
	var letters = [];
var rword = ""; 
for(let i = 0; i<str.length; i++){
   letters.push(str[i]);
}
for(let i = 0; i<str.length; i++){
   rword+=letters.pop();
}if(rword===str){
   console.log(str + 'is a palindrome');
} else {
   console.log(str + 'is not a palindrome');
}}
isPalindrome("madam");*/								
								/*task:11*/
/*function uppercase(str){
  var array1 = str.split(' ');
  var newarray1 = [];
     for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));}
   return newarray1.join(' ');}
console.log(uppercase("the quick brown fox"));*/
								/*task:12*/
/*function longestWord(s) {
    var str = s.split(" ");
    var longest = 0;
    var word = 0;
    for (var i = 0; i < str.length ; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];}}
    return word;}
console.log( longestWord("web devlopment "));*/
								/*task:13*/
/*function abc(s,l){
	var count=0
	for (var i = 0; i < s.length; i++) {
		if (s[i]==l) {
			count++;}}
document.write("string:	"+s+"	<br>letter	"+l+"<br>the occurence of letter	"+l+"	is	"+count)}
abc("jsresource.com","o")*/
								/*task:14*/
/*function calCircumference(r){
	var radius =(2*(3.14)*r)
	document.write("the circumference is "+radius)
	document.write("<br>");}
function calArea(r){
	var area =(3.14*(r*r));
document.write("the area of circle "+area)}
calCircumference(4);
calArea(4);*/
