const express = require('express');
const app = express ();

const mazo = ["A","B","C","D","E","F"];
let p1 = [];
let p2 = [];
let numRandomizado;


app.get ('/', ()=> {
    res.send('index page');
});


/*
    dado 2 numero, devuelve uno random
    guarda el numero random en una constante
*/
app.get('/random/:numInit/:numEnd', (req, res)=>{
    console.log('exc Random init');
    const initParams = parseInt(req.params.numInit);
    const endParams = parseInt(req.params.numEnd);
    const result = Math.floor (Math.random() *  (endParams - initParams) + initParams);
    
    numRandomizado = Math.floor (Math.random() *  (endParams - initParams) + initParams);
    res.json({'randomNumber':result})
    console.log('exc Random end ' + result);
});




/*
    Toma un array como Mazo principal
    distribuye un item para cada Participante (array P1 y P2 HardCoder)
*/
app.get('/distribute', ()=>{
    
    console.log("mazo Completo: "+  mazo);    
    const counMazo = mazo.length;
    var n = true;

    for (i = 0; i < counMazo; i++) {

        if(n===true){
            let copyData = mazo[0];
            mazo.splice(0, 1);
            p1.push(copyData)
            n = false;
        }else{
            let copyData = mazo[0];
            mazo.splice(0, 1);
            p2.push(copyData)
            n = true;
        }

      }

    console.log("mazo p1: "+  p1);
    console.log("mazo p2: "+  p2);
    console.log("mazo Completo: "+  mazo);

});



/*
   lee el numero random guardado en una constante
   y recibe un numero cualquiera sin efecto
*/
app.get('/getCardById/:cardId', (req, res)=>{

    const takeCard = req.params.cardId;

    if(takeCard===0){
        console.log(':primer Carta: '+takeCard);
    }else{
        
    }

    // console.log('recibi: '+ req.params.cardId);
    //console.log('randomizado: '+ numRandomizado)

});




app.get('/evalueWin/:cardId/:powerId/', (req, res)=>{

    const takeCard = req.params.cardId;
    const takePower = req.params.powerId;
    let winE = true;

    res.json({
       "win": true,
       "card_id":  takeCard,
       "power_id": takePower
      });

});





/********************** ayudantes ********************
******************************************************/


/*
    cuenta el Largo del mazo y 
    elimina el primero por cada ejecución
*/
app.get ('/lengthMazo',()=>{
    mazo.length;
    console.log("largo del mazo inicio: "+  mazo.length);
    mazo.splice(0, 1);
    console.log("largo del mazo end: "+  mazo);
    console.log("mazo dinamico:" + p1.length);
});

/*
response.json({ 
    anObject: { item1: "item1val", item2: "item2val" }, 
    anArray: ["item1", "item2"], 
    another: "item"
  });

*/

app.listen(3000, () => {
    console.log('server on port 3000 ');
})