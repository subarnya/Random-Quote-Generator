const quotes=[{
    quote:"Life is what happens when you're busy making other plans.",
    writer:"--John Lennon"
},{
    quote:"Always remember that you are absolutely unique. Just like everyone else.",
    writer:"--Margaret Mead"

},{
    quote:"Life is really simple, but we insist on making it complicated.",
    writer:"--Confucius"
},{
    quote:"The future belongs to those who believe in the beauty of their dreams.",
    writer:"--Eleanor Roosevelt"
},{
    quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    writer:"--John Lennon"
},{
    quote:"The purpose of our lives is to be happy.",
    writer:"--Dalai Lama"
},{
    quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    writer:"--Mother Teresa"
}]

let btn =document.querySelector("#Qbtn");
let quote=document.querySelector(".quote");
let writer =document.querySelector(".writer");

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML= quotes[random].quote;
    writer.innerHTML=quotes[random].writer;
    
})