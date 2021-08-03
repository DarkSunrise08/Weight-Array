var weight = [20,5,35,75,90];

function average(){
var sum = weight[0]+weight[1]+weight[2]+weight[3]+weight[4];
var anwser=sum/weight.length;
console.log(anwser);
}

function setup() 
{
  createCanvas(400,400);
  average();
}

function draw() 
{
background("red");

}

