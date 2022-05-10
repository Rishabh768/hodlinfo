

let table = document.querySelector('table');
function getData() {  
    fetch('http://localhost:3000/').then(res => res.json())
        .then(data => {

            for (let i = 0; i < data.length; i++){ 
                setData(data[i],i)
            }
        }
        )
}


function setData(data,index) {
    console.log(data);
    let temp = `<tr>
    <td>${index+1}</td>
    <td>${data.name}</td>
    <td>${data.last}</td>
    <td>${data.buy} / ${data.sell}</td>
    <td>${data.volume}</td>
    <td>${data.base_unit}</td>
    </tr>`
    table.innerHTML += temp;
}
getData();

