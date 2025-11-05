/*შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.*/

let array= [11,24,37,42,56,63,78,85,97,104];
for (let i=2; i< array.length; i+=3) {
    console.log(array[i]);
};


/*შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.*/

for (let i=10; i>=1; i--) {
    console.log(i);
    
}



/*მოცემული მასივიდან ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
*/ 
let persons =["John","Bob","Nick","Marry","Sue","Ann"];
let names=persons.filter(person=> person !="Bob" );
console.log(names);


let persons2=["John","Bob","Nick","Marry","Sue","Ann"];
let newpersons=[];

for (let i=0; i<persons2.length; i++){
if (persons2[i] !=="Bob") {
    newpersons.push(persons2[i]);}
};
console.log(newpersons);




/*ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125. */

function fun(number,power) {
    if (power===0) {
        return 1;
    }
    
    
    let result =1;
    if (power > 0){
        for (let i =0; i < power; i++) {
            result *=number;
        }
    }

    else {
        for (let i =0; i < Math.abs (power); i ++) {
        result *= number;
        }
        result = 1 / result;

    }
    return result;
}
console.log(fun(5,3));



/*შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
მაგ. 
1
 2
3 Fizz
4
5 Buzz
6 Fizz
7
8
9 Fizz
10 Buzz
11
12 Fizz
13
14
15 FizzBuzz
… 100-მდე.*/

function fizzBuzz(){
    for (let i=1; i<=100; i++){
        if (i % 3=== 0 && i % 5=== 0){
            console.log("FizzBuzz");
            
        } else if (i % 3=== 0){
            console.log("Fizz");
            
        }else if( i% 5=== 0) {
            console.log("Buzz");
            
        }else{
            console.log(i);
            
        }
    }
};


fizzBuzz();



/*შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120,*/

function factorialCalculator (number) {
    if (number < 0) return null;
    let result =1;
    for (let i =1; i<= number; i++){
        result*=i;
    }
    return result;
}

console.log(factorialCalculator (5));

