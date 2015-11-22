var request = require("request");
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('What is the beginning of eternity, the end of time and space, the beginning of every end and the end of every race? ');
});

app.get('/api/:locId', function (req, res){
	request("http://178.62.222.232/get/hbhi/1797", function(err, resp, body){
		var data = JSON.parse(body);
		for(s in data["hour-by-hour"].location.forecast.step)
		{
			data["hour-by-hour"].location.forecast.step[s].wg = Math.floor((Math.random() * 10) + 1);
			data["hour-by-hour"].location.forecast.step[s].wvh = Math.floor((Math.random() * 5) + 1);
			data["hour-by-hour"].location.forecast.step[s].wvd = Math.floor((Math.random() * 360)-10);
			data["hour-by-hour"].location.forecast.step[s].swlh = data["hour-by-hour"].location.forecast.step[s].wvh + Math.floor((Math.random() * 5) + 1);
			data["hour-by-hour"].location.forecast.step[s].swld = data["hour-by-hour"].location.forecast.step[s].wvd + Math.floor((Math.random() * 10) + 1);
			data["hour-by-hour"].location.forecast.step[s].vis = Math.floor((Math.random() * 9999)+1);
			data["hour-by-hour"].location.forecast.step[s].lcc = Math.floor((Math.random() * 30) + 1);
			data["hour-by-hour"].location.forecast.step[s].mcc = Math.floor((Math.random() * 30) + 1); 
			data["hour-by-hour"].location.forecast.step[s].hcc = Math.floor((Math.random() * 30) + 1);
			data["hour-by-hour"].location.forecast.step[s].ccc = Math.floor((Math.random() * 30) + 1);
			data["hour-by-hour"].location.forecast.step[s].cc = data["hour-by-hour"].location.forecast.step[s].lcc + data["hour-by-hour"].location.forecast.step[s].mcc + data["hour-by-hour"].location.forecast.step[s].hcc;
			data["hour-by-hour"].location.forecast.step[s].hpa200 = { ws: Math.floor((Math.random() * 10) + 1) , wn: Math.floor((Math.random() * 360) + 1)},
			data["hour-by-hour"].location.forecast.step[s].hpa300 = { ws: Math.floor((Math.random() * 10) + 1) , wn: Math.floor((Math.random() * 360) + 1)},
			data["hour-by-hour"].location.forecast.step[s].hpa500 = { ws: Math.floor((Math.random() * 10) + 1) , wn: Math.floor((Math.random() * 360) + 1)},
			data["hour-by-hour"].location.forecast.step[s].hpa700 = { ws: Math.floor((Math.random() * 10) + 1) , wn: Math.floor((Math.random() * 360) + 1)},
			data["hour-by-hour"].location.forecast.step[s].hpa850 = { ws: Math.floor((Math.random() * 10) + 1) , wn: Math.floor((Math.random() * 360) + 1)},
			data["hour-by-hour"].location.forecast.step[s].hpa925 = { ws: Math.floor((Math.random() * 10) + 1) , wn: Math.floor((Math.random() * 360) + 1)},
			data["hour-by-hour"].location.forecast.step[s].hpa950 = { ws: Math.floor((Math.random() * 10) + 1) , wn: Math.floor((Math.random() * 360) + 1)},
			data["hour-by-hour"].location.forecast.step[s].hpa1000 = { ws: Math.floor((Math.random() * 10) + 1) , wn: Math.floor((Math.random() * 360) + 1)}

		}
		data["hour-by-hour"].location.lat = Math.floor((Math.random() * 50) + 20);
		data["hour-by-hour"].location.lng = Math.floor((Math.random() * 50) + 20)
		data["hour-by-hour"].location.nearestAirport = "OJAM";
		data["hour-by-hour"].location.nearestAirportLat = Math.floor((Math.random() * 50) + 20)
		data["hour-by-hour"].location.nearestAirportLng = Math.floor((Math.random() * 50) + 20)
		data["hour-by-hour"].location.nearestSeaShoreLat = Math.floor((Math.random() * 50) + 20)
		data["hour-by-hour"].location.nearestSeaShoreLng = Math.floor((Math.random() * 50) + 20)
		data["hour-by-hour"].location.currentSunAngle = Math.floor((Math.random() * 20) + 1)

		res.json(data);
	});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});