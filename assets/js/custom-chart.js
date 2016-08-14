var chart = new Chartist.Line('.ct-chart', {
        labels: [0, 1, 2, 3, 4, 5, 6, 7],
        series: [
        [1, 1, 2, 1, 1, 2, 2, 3, 1, 3, 0],
        [1.5, 1, 1, 2, 1, 1.6, 1.6, 3, 1, 3, 0]    
        ]
      }, {
        high: 3,
        low: 0,
        showArea: true,
        showLine: true,
        showPoint: true,
        fullWidth: true,
        axisX: {
          showLabel: true,
          showGrid: true
        }    
      });

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 2000 * data.index,
              dur: 2000,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            },

          });
        }
      });

      var seq = 0;
      chart.on('created', function() {
        seq = 0;
      });
      chart.on('draw', function(data) {
        if(data.type === 'point') {
          data.element.animate({
            opacity: {
              begin: seq++ * 80,
              dur: 500,
              from: 0,
              to: 1
            },
            x1: {
              begin: seq++ * 80,
              dur: 500,
              from: data.x - 100,
              to: data.x,
              easing: Chartist.Svg.Easing.easeOutQuart
            }
          });
        }
      });
      chart.on('created', function() {
        if(window.__anim0987432598723) {
          clearTimeout(window.__anim0987432598723);
          window.__anim0987432598723 = null;
        }
        window.__anim0987432598723 = setTimeout(chart.update.bind(chart), 8000);
      });
