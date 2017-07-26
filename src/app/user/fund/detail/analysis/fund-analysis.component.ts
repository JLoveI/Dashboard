import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
    templateUrl: './fund-analysis.component.html',
    styleUrls: ['./fund-analysis.component.css']
})

export class FundAnalysisComponent implements OnInit {
    barChart: Chart;
    lineChart: Chart;
    constructor() {
    }

    ngOnInit(): void {
        this.barChart = new Chart({
            chart: {
                type: 'column'
            },
            title: {
                text: '收益分析-按投资项目'
            },
            xAxis: {
                categories: ['太阳能项目', '互联网项目', '共享单车']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '投入成本',
                data: [100, 110, 200]
            }, {
                name: '已实现收益',
                data: [40, 50, 70]
            },
            {
                name: '预计收益',
                data: [90, 90, 140]
            }]
        });

        this.lineChart = new Chart({
              chart: {
                type: 'line'
            },
            title: {
                text: '收益分析-按年份'
            },
            xAxis: {
                categories: ['2015年', '2016年', '2017年']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '分红',
                data: [34, 55, 120]
            }, {
                name: '退出收益',
                data: [223, 345, 441]
            }]
        });
    }

}