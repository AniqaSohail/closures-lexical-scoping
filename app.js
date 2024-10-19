                   // lexical scoping 
// lexical scoping , basically its a nested function
// function returning function 
// lexical scoping have the access to run all the function
// example
function outer() {
    let username = "aniqa";
    function inner() {
        console.log("inner",username);
    }
    function inner2() {
        console.log("inner2 , username");
    }
    inner();
    inner2();
}
// inner function kay ander function sab access honge outer mai access nahi hoga 
outer();
// console.log("too outer",username);
// this is lexicalscoping 
                         //  closures scoping 
// jab ap pura function return kartay ho tou just function return nahi ho raha hota 
// ouska pura scoop return ho raha hota hae , or wo pura lexical scope return kar raha hota hae
                              // example1
function clickhandler(color){
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}
document.getElementById('orange').onclick = clickhandler
("orange");
document.getElementById('green').onclick = clickhandler
("green");
document.getElementById('red').onclick = clickhandler
("red");
                         // example2
function firstFunc(){
        const firstVar = 10
        function secondFunc(){
            const secondVar =20
            function thirdFunc(){
                const thirdVar = 30
                console.log(firstVar,secondVar,thirdVar);    
            }
            return thirdFunc
        }
        return secondFunc
    }
    const ans = firstFunc()//return secondFunc
    const finalAns = ans() //return thirdFunc
    finalAns()
    
// jab inner function return hota hae wo apne parent function kay sath return hota hae jo kay lexical enviroment hota hae 
