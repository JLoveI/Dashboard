import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
    templateUrl: './invester-analysis-chart.component.html',
    styleUrls: ['./invester-analysis-chart.component.css']
})

export class InvesterAnalysisComponentChart implements OnInit {
    rateBarChart: Chart;
    incomeBarChart: Chart;
    peiChart: Chart;
    constructor() {
    }

    ngOnInit(): void {
        this.rateBarChart = new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: '所投基金收益率'
            },
            yAxis: {
                title: {
                    text: '投资收益率(%)'
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}%</b>'
            },
            xAxis: {
                categories: ['基金一号', '基金二号', '基金三号']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '预计收益',
                data: [30, 22, 38]
            }]
        });

        this.incomeBarChart = new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: '所投基金收益分析'
            },
            xAxis: {
                categories: ['基金一号', '基金二号', '基金三号']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '投资成本',
                data: [10, 20, 22]
            }, {
                name: '综合收益',
                data: [15, 22, 25]
            },
            {
                name: '已实现收益',
                data: [6, 7, 9]
            },
            {
                name: '预估收益',
                data: [17, 21, 32]
            },]
        });

        this.peiChart = new Chart({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}:<b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>:{point.y}  {point.percentage:.1f} %'
                        }
                    }
                },
                series: [{
                    name: '综合收益',
                    colorByPoint: true,
                    data: [{
                        name: '累计退出收益',
                        y: 131
                    }, {
                        name: '累计退出收益',
                        y: 459
                    }, {
                        name: '预计未实现收益',
                        y: 321
                    }]
                }]
        });
    }

}