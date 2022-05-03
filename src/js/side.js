const request = new XMLHttpRequest();
const url = 'https://www.gmarket.co.kr/'

request.open('GET', url, true)
request.onload = function() {
  console.log(request.responseText)
}

request.send();
