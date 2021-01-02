
var container=document.createElement('div');
h1=document.createElement('h1');
h1.innerHTML="<b>Kaprekar Number Generator</b>"
h1.classList.add('text-center')

var input_label=document.createElement('label');
input_label.setAttribute('for','InputNumber');
input_label.innerHTML="<b>Kaperkar's Constant</b>";
var input=document.createElement('input');
input.type="text";
input.id="InputNumber";
input.classList.add('form-control');
var  inner_div=document.createElement('div');
inner_div.classList.add('form-group','col-12');
inner_div.append(input_label,input);
var outer_div=document.createElement('div');
outer_div.classList.add('form-row');
outer_div.append(inner_div);
var button=document.createElement('button');
button.type="button";
button.classList.add('btn','btn-primary')
button.innerHTML="Check";
button.id="button";
button.addEventListener('click',showData);

var form=document.createElement('form');
form.classList.add('form-inline','container','text-center');
form.append(outer_div,button);

container.append(h1,form);
document.body.append(container);




function showData()
{
  var n=document.getElementById('InputNumber').value;
  var ans=solution(n);
  var span=document.createElement('span');
  span.style.color="Red"
  span.innerText=ans;
  document.body.append(span);
}

function solution(n)
{
    var n=n.toString();
function Array(num)
{
let res=[];
for(let i=0;i<num.length;i++)
{
res.push(num[i]);
}
return res;
}

var larger=Array(n).sort().reverse().join('');
var smaller=Array(n).sort().join('');
  console.log(larger);
  console.log(smaller);
  var diff=larger-smaller;
  console.log(diff)
  if(diff=='6174')
  { 
      return 'first Iteration  ->  ' +larger +' -' +smaller +'= ' +diff;
  }

}

