/* Simple line chart 
*******************************************************/

var chart = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ]
    },
    bindto: '#chart'
});

setTimeout(function () {
    chart.load({
        columns: [
            ['data1', 230, 190, 300, 500, 300, 400]
        ]
    });
}, 1000);

setTimeout(function () {
    chart.load({
        columns: [
            ['data3', 130, 150, 200, 300, 200, 100]
        ]
    });
}, 1500);

setTimeout(function () {
    chart.unload({
        ids: 'data1'
    });
}, 2000);

/* Line chart with time series
****************************************************************/
var chart1 = c3.generate({
    data: {
        x: 'x',
//       xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 340, 200, 500, 250, 350]
        ]
    },
    bindto: '#chart1',
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});

setTimeout(function () {
    chart1.load({
        columns: [
            ['data3', 400, 500, 450, 700, 600, 500]
        ]
    });
}, 1000);

/* XY LineChart
*****************************************************************/
var chart2 = c3.generate({
    data: {
        xs: {
            'data1': 'x1',
            'data2': 'x2',
        },
        columns: [
            ['x1', 10, 30, 45, 50, 70, 100],
            ['x2', 30, 50, 75, 100, 120],
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 20, 180, 240, 100, 190]
        ]
    },
    bindto: '#chart2'
});

/* Spline Chart
****************************************************************/
var chart3 = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        type: 'spline'
    },
    bindto: '#chart3'
});

/* Line chart with regions
****************************************************************/
var chart4 = c3.generate({
    data: {
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
        ],
        regions: {
            'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only
            'data2': [{'end':3}]
        }
    },
    bindto: '#chart4'
});

/* Area charts
****************************************************************/
var chart5 = c3.generate({
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area',
            data2: 'area-spline'
        }
    },
    bindto: '#chart5'
});

/* Stacked Area Chart
**************************************************************/
var chart6 = c3.generate({
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 120],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'area-spline',
            data2: 'area-spline'
            // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
        },
        groups: [['data1', 'data2']]
    },
    bindto: '#chart6'
});

/* Area Step Chart
***************************************************************/
var chart7 = c3.generate({
    data: {
        columns: [
            ['data1', 300, 350, 300, 0, 0, 100],
            ['data2', 130, 100, 140, 200, 150, 50]
        ],
        types: {
            data1: 'step',
            data2: 'area-step'
        }
    },
    bindto: '#chart7'
});

/* Region With Time Series
***************************************************************/
var chart8 = c3.generate({
    data: {
        x: 'date',
        columns: [
            ['date', '2014-01-01', '2014-01-10', '2014-01-20', '2014-01-30', '2014-02-01'],
            ['sample', 30, 200, 100, 400, 150, 250]
        ]
    },
    bindto: '#chart8',
    axis: {
        x: {
            type: 'timeseries'
        }
    },
    regions: [
        {start: '2014-01-05', end: '2014-01-10'},
        {start: new Date('2014/01/15'), end: new Date('20 Jan 2014')},
        {start: 1390575600000, end: 1391007600000} // start => 2014-01-25 00:00:00, end => 2014-01-30 00:00:00
    ]
});






