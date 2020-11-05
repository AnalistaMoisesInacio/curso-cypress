it('nada agora', function(){})
   // function soma(a,b) {
       // return a + b;
   // }

  // const soma = function(a,b){
     //  return a+b;
  // }

  //arrow function basicas

 // const soma = (a,b) =>{
      //return a+b;
  //}

 // const soma = (a,b) => a + b;


     //Entre chaves precisa do "return"
   const soma = (a,b) => {
        return a + b;
    }


   //Com um parametro não precisa colocar entre "( )", só colocar maior que 1
   //const soma = a => a + 

console.log(soma(1,3));

it('a function teste....',function() {
    console.log('Function',this)
});

it('a function teste....',() => {
    console.log('Arrow',this)
});