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
                lineWidth: 1
            },
            column: {
                shadow: false,
                borderWidth: 0,
                crisp: false,
            }
        },
        series: [
            {
                name: 'Mexico',
                type:'line',
                data: data['time_series']['confirmed']
            }
        ]
    }
    var chart = Highcharts.chart('confirmedChart', confirmedOptions);
}