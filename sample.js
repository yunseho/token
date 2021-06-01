//Promise 목적

let myFirstPromise = new Promise ((resolev, reject))
    setTimeout(function(){
        resolev("success!");
    }, 250);

//New -> 함수를 객체로 변경해주는 키워드다
//this-> 해당{}안에 있는 상위변수명을 가르킴

function User(){  
    this.name = 'foo'
    this.age = 20
    console.log(this);
    //this는 User를 뜻함
}

//callback ?
const pr = new Promise( ()=>{

} )