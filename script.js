var div = document.createElement("div");
div.innerHTML=`<input type="text"  id="txt">
<button type="button" onclick="foo()">Search</button>
<div id="active"></div>
<div id="recovered"></div>
<div id="death"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function foo(){
    let txtval= document.getElementById("txt").value;
    let res = await fetch(`https://api.covid19api.com/total/dayone/country/${txtval}`);
    let res1 = await res.json();
    console.log(res1);

    let index= res1.length-1;
    var result = res1[index].Active;
    console.log(result);
    document.getElementById("active").innerText=`Total Active cases : ${result}`;

    var reco = res1[index].Recovered;
    console.log(reco);
    document.getElementById("recovered").innerText=`Total Recovered cases : ${reco}`;

    var dead = res1[index].Deaths;
    console.log(dead);
    document.getElementById("death").innerText=`Total Recovered cases : ${dead}`;

}