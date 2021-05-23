const hour = document.getElementById('hora')
const item = document.getElementsByClassName('item')

function startTime()
{
let today=new Date();
let h=today.getHours();
let m=today.getMinutes();

if(m < 10){
    m="0" + m
}
hour.innerHTML=`${h}:${m}`;
t=setTimeout('startTime()',500);
}

function selectItem(event) {
    const selectedElement = document.querySelector('.selected');
    selectedElement.classList.remove('selected');
    event.target.classList.add('selected');
  }

function itemSelection() {
    for(let i = 0; i < item.length; i += 1) {
        item[i].addEventListener('click', selectItem)
    }
}

itemSelection()
startTime()