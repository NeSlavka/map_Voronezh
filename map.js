anychart.onDocumentReady(function() {

    var dataSet = anychart.data.set([
        {'id': 'Рамонский район',        'value': 100},
        {'id': 'Новоусманский район',    'value': 95},
        {'id': 'Каширский район',        'value': 90},
        {'id': 'Семилукский район',      'value': 88},
        {'id': 'Хохольский район',       'value': 85},
        {'id': 'Верхнехавский район',    'value': 80},

        {'id': 'Лискинский район',       'value': 70},
        {'id': 'Нижнедевицкий район',    'value': 65},
        {'id': 'Аннинский район',        'value': 60},
        {'id': 'Панинский район',        'value': 58},
        {'id': 'Острогожский район',     'value': 55},
        {'id': 'Репьёвский район',       'value': 52},
        {'id': 'Бобровский район',       'value': 50},
        {'id': 'Эртильский район',       'value': 48},
        {'id': 'Таловский район',        'value': 46},
        {'id': 'Новохопёрский район',    'value': 44},
        {'id': 'Павловский район',       'value': 42},
        {'id': 'Бутурлиновский район',   'value': 40},

        {'id': 'Грибановский район',     'value': 32},
        {'id': 'Терновский район',       'value': 30},
        {'id': 'Воробьёвский район',     'value': 28},
        {'id': 'Калачеевский район',     'value': 26},
        {'id': 'Подгоренский район',     'value': 24},
        {'id': 'Ольховатский район',     'value': 22},
        {'id': 'Каменский район',        'value': 20},
        {'id': 'Верхнемамонский район',  'value': 18},
        {'id': 'Поворинский район',      'value': 16},
        {'id': 'Россошанский район',     'value': 14},
        {'id': 'Петропавловский район',  'value': 12},
        {'id': 'Богучарский район',      'value': 10},
        {'id': 'Кантемировский район',   'value': 8}
    ]);

    anychart.data.loadJsonFile('voronezh.geo.json', function(geoData) {
        var map = anychart.map();
        map.geoData(geoData);

        var series = map.choropleth(dataSet);
        series.geoIdField('name');
        series.labels(false);

        series.colorScale(anychart.scales.linearColor([
            '#E8F5E9',
            '#B3E5FC',
            '#FFF9C4',
            '#FFCC80',
            '#FF8A65',
            '#E53935'
        ]));

        series.stroke('#FFFFFF', 1);

        map.container('container');
        map.draw();
    }, function(error) {
        document.getElementById('container').innerHTML =
            '<p style="color:red;padding:20px;">Ошибка загрузки GeoJSON</p>';
        console.error(error);
    });
});
