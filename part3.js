

var ask = new XMLHttpRequest()
ask.open('GET', 'https://covid19-api.org/api/status', true)
ask.onload = function () {//to know when the html is load
var news = JSON.parse(this.response);
var allCases=0,recoveredAroundTheWorld =0,percent=0;
if (ask.readyState==4 && ask.status==200) {
    news.forEach(function(country) {
    allCases+=country.cases;
    recoveredAroundTheWorld+=country.recovered;
    });
    percent=recoveredAroundTheWorld/allCases*100;
    document.getElementById("recovered").innerHTML = recoveredAroundTheWorld;
    document.getElementById("recoverdPercent").innerHTML = percent;
  } 
}
ask.send();

