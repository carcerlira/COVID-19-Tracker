function makeChart(data) {
    var confirmedOptions = {
        chart: {
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Daily new cases'
        },
        subtitle: {
            text: data['general']['country']
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: false,
            visible: false,
            endOnTick: false 
        },
        plotOptions: {
            series: {
                pointInterval: 24*3600*1000,
            },
            line: {
                color: '#0056bf',
                lineWidth: 3
            },
            column: {
                shadow: false,
                // pointWidth: 2,
                borderWidth: 0,
                // pointPadding: 0.5,
                // groupPadding: 1,
                crisp: false,
            },
            area: {
                lineWidth: 3,
                fillOpacity: 0.2
            }
        },
        series: [
            {
                name: 'Daily new cases',
                type:'column',
                data: data['time_series']['daily_confirmed']
            },
            {
                name: '7MA',
                type:'line',
                enableMouseTracking: false,
                data: data['time_series']['7MA_daily_confirmed']
            }
        ]
    }
    var chart = Highcharts.chart('confirmedChart', confirmedOptions);
}