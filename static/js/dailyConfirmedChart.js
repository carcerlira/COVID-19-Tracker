function makeChart(series) {
    var dailyConfirmedOptions = {
        chart: {
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Daily new cases'
        },
        subtitle: {
            text: general['country']
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            visible: false,
            endOnTick: false, 
            min: 0
        },
        plotOptions: {
            series: {
                pointInterval: 24*3600*1000,
            },
            line: {
                color: '#0056bf',
            },
            column: {
                shadow: false,
                borderWidth: 0,
                groupPadding: 0.3,
                crisp: false,
            },
            area: {
                color: '#0056bf',
                fillOpacity: 0.15,
            }
        },
        series: [
            {
                name: 'Daily new cases',
                type:'column',
                data: series['daily_confirmed']
            },
            {
                name: '7MA',
                type:'area',
                data: series['7MA_daily_confirmed']
            }
        ]
    }
    var chart = Highcharts.chart('dailyConfirmedChart', dailyConfirmedOptions);
}