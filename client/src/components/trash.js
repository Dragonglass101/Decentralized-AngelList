// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Preparing the chart data
const chartData = [
    {
        label: "Founders",
        value: "285040"
    },
    {
        label: "Employees",
        value: "146330"
    },
    {
        label: "Investor A",
        value: "105070"
    },
    {
        label: "Investor B",
        value: "49100"
    },
    {
        label: "Option Pool",
        value: "49100"
    }
];

// Create a JSON object to store the chart configurations
const chartConfigs = {
    type: "doughnut2d", // The chart type
    width: "600", // Width of the chart
    height: "600", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
        // Chart Configuration
        chart: {
            // caption: "Companies Market Share",
            // subCaption: "Last year",
            numberPrefix: "$",
            bgColor: "#ffffff",
            startingAngle: "310",
            showLegend: "1",
            defaultCenterLabel: "Total Shares: $64.08K",
            centerLabel: "Shares owned by: $label: $value",
            centerLabelBold: "1",
            // showTooltip: "0",
            showPercentValues: "1",
            showPercentInTooltip: "1",
            decimals: "0",
            theme: "fusion"
        },
        // Chart Data - from step 2
        data: chartData
    }
};


export const Trash = () => {
    return (
        <>
            <ReactFC {...chartConfigs} />
        </>
    )
}







