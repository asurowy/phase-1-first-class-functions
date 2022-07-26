function myFunction(){
    return "Hi there,";
}

function receivesAFunction(callbackFunction) {
    return callbackFunction();
}
 console.log(receivesAFunction(myFunction));


const Bob = function iReturnThing(thing){
    return thing;
}
function returnsANamedFunction(){
    return Bob;
}
returnsANamedFunction(iReturnthing());

function returnsAnAnonymousFunction(){
    return function(params){
        console.log('this is an anonymous function');
    };
}
returnsAnAnonymousFunction();