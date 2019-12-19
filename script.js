mapboxgl.accessToken = 'pk.eyJ1IjoibWFpZXJtYWNrIiwiYSI6ImNrM3JvODA1ODA4Z2IzaHVoams2Zm41YTEifQ.Cb3O-AwARlOakYrbV9erjQ';

var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/maiermack/ck3rxyctv0ekb1cou5g6cff9u',
});

map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
            "id": "snotel",
            "type": "circle",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [
                        {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-121.74765, 46.78265]
                            }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.69847, 47.77957]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.2555, 48.8793]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.6796, 47.35037]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.19713, 48.92755]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-123.45747, 47.7086]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.33058, 46.81003]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-117.17633, 48.68688]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.94032, 47.0444]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-122.21633, 45.90362]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.5343, 46.86954]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.46464, 47.01872]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.67138, 47.27666]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-123.0788, 47.87224]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.43895, 48.85933]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.90893, 48.69092]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.08553, 47.53565]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-118.9864, 48.9516]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.17093, 46.54741]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.48771, 47.28107]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.6586, 48.72047]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.07976, 48.98075]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.58778, 47.06565]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.80767, 45.99077]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-122.15413, 46.14778]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.96288, 46.27143]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.08095, 46.3575]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.91678, 48.19798]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.77972, 47.20172]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.69823, 48.76292]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.47197, 47.28312]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.92951, 48.82453]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.4827, 46.90585]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-119.08159, 48.36163]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-123.026, 47.7637]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.56812, 47.35768]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.95232, 46.92833]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.44213, 47.37406]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.91551, 48.44488]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.95555, 46.10242]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.38643, 46.62153]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.56622, 47.9909]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.51435, 46.34963]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-117.08938, 47.87927]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.7358, 48.51865]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.60475, 47.30218]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-119.8383, 48.65518]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.06323, 47.38485]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.67734, 45.98797]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.42172, 47.15992]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-118.39843, 48.86133]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-122.25393, 46.19325]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.61007, 47.68433]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-117.39438, 46.23718]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.92661, 46.1795]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-122.1772, 46.26113]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-117.54155, 46.18287]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.34162, 47.27427]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.09288, 47.74607]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.76345, 46.09497]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.78267, 48.57142]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-122.18402, 46.1638]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.9895, 48.52753]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.46975, 47.33198]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-117.8505, 46.11868]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.8493, 48.0747]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.29412, 47.23328]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-120.37015, 47.28734]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-123.42594, 47.94485]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.78976, 48.8661]
                                }
                        },
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-121.38153, 46.64142]
                                }
                        }
                    ]
                }
            }
          }
        );

        });


map.on('click', 'snotel', function (e) {
            let coordinates = e.features[0].geometry.coordinates.slice();             
            console.log(coordinates);
            let longitude = coordinates[0];
            let latitude = coordinates[1];
            console.log(latitude.toFixed(3));
            getSnotelResults(latitude, longitude);
            getForecast(latitude, longitude);
            $('#accordion').removeClass('hidden');
});
             
            // Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'snotel', function () {
    map.getCanvas().style.cursor = 'pointer';
});
             
            // Change it back to a pointer when it leaves.
map.on('mouseleave', 'snotel', function () {
    map.getCanvas().style.cursor = '';
});

function getSnotelResults(latitude, longitude){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://api.powderlin.es/closest_stations?lat=' + `${latitude}` + '&lng=' + `${longitude}` + '&data=true&count=1&days=3';

    fetch(proxyurl + url)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      //.then(responseJson => console.log(responseJson))
      .then(responseJson => displaySnotelResults(responseJson));       
}

function displaySnotelResults(response){
    response[0].data.forEach(item => console.log(item));
    $('#info').empty();
    $('#info').append(`<div><h1>${response[0].station_information.name}</h1>
    <h2>Elevation: ${response[0].station_information.elevation}   Location: ${response[0].station_information.location.lat}, ${response[0].station_information.location.lng}</h2></div>`);
    $('#snotel').empty();
    $('#accordion').next('div').append(
    response[0].data.forEach(item => { 
        let ul = '<ul>';
         Object.keys(item).forEach(key => {
            ul += '<li>'+key+':'+item[key]+'</li>'; 
        }) 
        ul += '</ul>'; 
        $('#snotel').append(ul);
    })
    )
};





function getForecast(latitude, longitude){
 let id = 'b9d28e99';
 let key = '512ca156fa4a85d2cae8cadd37fab6d1';
 const proxyurl = "https://cors-anywhere.herokuapp.com/";

let url = `//api.weatherunlocked.com/api/forecast/${latitude.toFixed(3)},${longitude.toFixed(3)}?app_id=${id}&app_key=${key}`;
console.log(url);

fetch(proxyurl + url)
.then(response => {
    if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
})
.then(responseJson => displayForecast(responseJson));
}

function displayForecast(response){
    const timeSeries = [];
    console.log(response);
    response.Days.forEach(element => console.log(element.Timeframes.forEach(element => timeSeries.push(element))));
    console.log(timeSeries);
    const condensedTimeSeries = [];
    for(i=4; i < timeSeries.length/2; i+= 2){
        let smallSeries = {};
        smallSeries.date = timeSeries[i].date;
        smallSeries.time = timeSeries[i].time;
        smallSeries.precip_pct = timeSeries[i].prob_precip_pct;
        smallSeries.temp = timeSeries[i].temp_f;
        smallSeries.snow_total = timeSeries[i].snow_accum_in;
        smallSeries.feelslike = timeSeries[i].feelslike_f;
        condensedTimeSeries.push(smallSeries);
    }
    console.log(condensedTimeSeries);
    const dateInfo = {
        date: [],
    };
    let counter = 0;
    let key = null;
    for(let i=0; i < condensedTimeSeries.length; i++){
        console.log(dateInfo.date[counter] + ' ' + condensedTimeSeries[i].date);
        if(key != condensedTimeSeries[i].date){
            key = condensedTimeSeries[i].date;
            console.log('key' + key);
            const newDate = {
                [key]: {
                    time: {},
                },
            }
            dateInfo.date.push(newDate);
        }
        else{
            counter++;
        }
        
    }
    populateDateInfo(dateInfo, condensedTimeSeries);
    makeForecast(dateInfo);
}

function populateDateInfo(dateInfo, condensedTimeSeries){

    function getTime(dateInfo, condensedTimeSeries){
        console.log('now running getTime');
        let time = 0;
        let arrayCount = 0;
        let dayCount = 0;
            for(let i=0; i < condensedTimeSeries.length; i++){
                if(Object.keys(dateInfo.date[arrayCount]) == condensedTimeSeries[i].date){
                  time = condensedTimeSeries[i].time;
                   const newTime = {
                     [time]: {},
                 }
                    $.extend(dateInfo.date[arrayCount][condensedTimeSeries[i].date].time, newTime);
                    
            }
            else{
                arrayCount++;
            }
        }
        console.log(dateInfo);
    }
    getTime(dateInfo, condensedTimeSeries);


    function getData(dateInfo, condensedTimeSeries){
        console.log('now running getData');
        
        let arrayCount = 0;
            for(let i=0; i < condensedTimeSeries.length; i++){
                if(Object.keys(dateInfo.date[arrayCount]) == condensedTimeSeries[i].date){
                  $.extend(dateInfo.date[arrayCount][condensedTimeSeries[i].date].time[condensedTimeSeries[i].time], condensedTimeSeries[i]);
                  delete dateInfo.date[arrayCount][condensedTimeSeries[i].date].time[condensedTimeSeries[i].time].date;
                  delete dateInfo.date[arrayCount][condensedTimeSeries[i].date].time[condensedTimeSeries[i].time].time;
                 }                                
                else{
                     arrayCount++;
                }
        }
        console.log(dateInfo);
    }

    getData(dateInfo, condensedTimeSeries);
}

function makeForecast(dateInfo){
    $('#accordion2').empty();
    dateInfo.date.forEach((item, i=0) => {
        console.log(i);
        let day = i;
        $('#accordion2').append(`<h3>${Object.keys(item)}</h3>
        <div id="day${day}"></div>`);     
        
        let timeStamp = Object.keys(dateInfo.date[i][Object.keys(item)].time);

        timeStamp.forEach(item => {
            $(`#day${day}`).append(`<ul id="${item}-${day}"><h4>Time: ${item}</h4></ul>`);
        })

        let timeInfo = Object.entries(dateInfo.date[i][Object.keys(item)].time);
        timeInfo.forEach((item, i=0) => {

            hourlyInfo = Object.values(item[1]);
            $(`#${timeInfo[i][0]}-${day}`).append(`<li>Precipitation: ${item[1].precip_pct}%</li>
            <li>Temperature: ${item[1].temp}</li>
            <li>Feels Like: ${item[1].feelslike}</li>
            <li>Snow Total: ${item[1].snow_total}</li>`);
            /*hourlyInfo.forEach(item => {
                console.log(item);
                console.log(`appending: ${item} into #${timeInfo[i][0]}-${day}`);
                $(`#${timeInfo[i][0]}-${day}`).append(`<li>${item}</li>`);
            })*/
        })

    })
    $( "#accordion2" ).accordion('refresh');

}

$(function() {
    $('#accordion').accordion({
        heightStyle: 'content'
    });
    $( "#accordion" ).accordion('refresh');

 });

 $(function(){
 $('#accordion2').accordion({
    heightStyle: 'content'
});
});