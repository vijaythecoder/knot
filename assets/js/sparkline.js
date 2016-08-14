function defaultChartConfig(containerId, data) {
    nv.addGraph(function() {

        var chart = nv.models.sparklinePlus()
        chart.x(function(d,i) { return i })
        .xTickFormat(function(d) {
            return d3.time.format('%x')(new Date(data[d].x))
        });

        d3.select(containerId)
        .datum(data)
        .transition().duration(250)
        .call(chart);

        return chart;
    });
}

defaultChartConfig("#chart1",sine());
defaultChartConfig("#chart2", volatileChart(130.0, 0.02));
defaultChartConfig("#chart3", volatileChart(25.0, 0.09,30));

function sine() {
    var sin = [];
    var now =+new Date();

    for (var i = 0; i < 100; i++) {
        sin.push({x: now + i * 1000 * 60 * 60 * 24, y: Math.sin(i/10)});
    }

    return sin;
}

function volatileChart(startPrice, volatility, numPoints) {
    var rval =  [];
    var now =+new Date();
    numPoints = numPoints || 100;
    for(var i = 1; i < numPoints; i++) {

        rval.push({x: now + i * 1000 * 60 * 60 * 24, y: startPrice});
        var rnd = Math.random();
        var changePct = 2 * volatility * rnd;
        if ( changePct > volatility) {
            changePct -= (2*volatility);
        }
        startPrice = startPrice + startPrice * changePct;
    }
    return rval;
}

/*Composite Bar*/
$(document).ready(function () {
    var sparklinecompositebars = $('[data-sparkline=compositebar1]');
            $.each(sparklinecompositebars, function () {
                $(this).sparkline([8,4,1,2,4,6,2,4,4,8,10,7,10], {
                    type: 'bar',
                    disableHiddenCheck: true,
                    height: 100,
                    width: $(this).data('width'),
                    barWidth: '10px',
                    spotRadius: '3',
                    lineWidth: '2',
                    barSpacing: '5px',
                    barColor: '#F5F5F5',
                                        
                });
                $(this).sparkline([7,6,5,7,9,10,8,7,6,6,4,7,8], {
                    type: 'line',
                    height: $(this).data('height'),
                    disableHiddenCheck: true,
                    width: $(this).data('width'),
                    lineColor: '#fff',
                    fillColor: false,
                    spotRadius: '3',
                    lineWidth: '2',
                    minSpotColor: '#fafafa',
                    maxSpotColor: '#fff',
                    highlightSpotColor: '#FFF',
                    highlightLineColor: '#FFF',
                    composite: true
                });

            }); 

            var sparklinecompositebars = $('[data-sparkline=compositebar2]');
            $.each(sparklinecompositebars, function () {
                $(this).sparkline('html', {
                    type: 'bar',
                    disableHiddenCheck: true,
                    height: 100,
                    width: $(this).data('width'),
                    barWidth: '10px',
                    spotRadius: '3',
                    lineWidth: '2',
                    barSpacing: '5px',
                    barColor: '#F5F5F5',
                                        
                });
                $(this).sparkline([2,8,6,3,4,5,8,2,4,4,2,1,7], {
                    type: 'line',
                    height: $(this).data('height'),
                    disableHiddenCheck: true,
                    width: $(this).data('width'),
                    lineColor: '#fff',
                    fillColor: false,
                    spotRadius: '3',
                    lineWidth: '2',
                    minSpotColor: '#fafafa',
                    maxSpotColor: '#fff',
                    highlightSpotColor: '#FFF',
                    highlightLineColor: '#FFF',
                    composite: true
                });

            });
    
});
            