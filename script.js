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
            let url = 'http://api.powderlin.es/closest_stations?lat=' + `${latitude}` + '&lng=' + `${longitude}` + '&data=true&count=1&days=3';
            console.log(url);
            getResults(url, latitude, longitude);
});
             
            // Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'snotel', function () {
    map.getCanvas().style.cursor = 'pointer';
});
             
            // Change it back to a pointer when it leaves.
map.on('mouseleave', 'snotel', function () {
    map.getCanvas().style.cursor = '';
});

function getResults(url, latitude, longitude){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + url)
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(responseJson => displayResults(responseJson));
      
}

function displayResults(response){
    response[0].data.forEach(item => console.log(item));
    $('#popup').empty();
    response[0].data.forEach(item => {
        $('#popup').append('<ul>');
        Object.keys(item).forEach(key => {
            $('#popup').append('<li>'+key+':'+item[key]+'</li>');
        })
        $('#popup').append('</ul>');
    });

}