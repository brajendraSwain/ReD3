import React, { useMemo } from "react";
import * as d3 from "d3";
import Axis from "../Axis/Axis";
import {
  ChartContainer,
  LegendColor,
  LegendContainer,
  LegendItem,
  Title,
} from "./styles";

// TypeScript interfaces
export interface GroupedDataPoint {
  category: string;
  [key: string]: string | number;
}

export interface GroupedBarChartProps {
  /** Array of data points with category and multiple value columns */
  data: GroupedDataPoint[];
  /** Array of keys to group by (column names for values) */
  keys: string[];
  /** Chart width in pixels */
  width?: number;
  /** Chart height in pixels */
  height?: number;
  /** Chart title */
  title?: string;
  /** Color scheme for bars */
  colors?: string[];
  /** Show legend */
  showLegend?: boolean;
  /** Custom legend labels (defaults to keys) */
  legendLabels?: string[];
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Bar padding within groups */
  innerPadding?: number;
  /** Padding between groups */
  outerPadding?: number;
  /** Show grid lines */
  showGrid?: boolean;
  /** Y-axis label */
  yAxisLabel?: string;
  /** X-axis label */
  xAxisLabel?: string;
  /** Custom tick format for Y-axis */
  yTickFormat?: (d: number) => string;
  /** Show values on bars */
  showValues?: boolean;
  /** Hover effects */
  enableHover?: boolean;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

const GroupedBarChart: React.FC<GroupedBarChartProps> = ({
  data,
  keys,
  width = 800,
  height = 500,
  title = "Grouped Bar Chart",
  colors = d3.schemeSet2,
  showLegend = true,
  legendLabels,
  animationDuration = 500,
  innerPadding = 0.1,
  outerPadding = 0.2,
  showGrid = true,
  yAxisLabel = "Values",
  xAxisLabel = "Categories",
  yTickFormat = d3.format(".0f"),
  showValues = false,
  enableHover = true,
  margin,
}) => {
  // Chart dimensions
  const updatedMargin = { top: 20, right: 30, bottom: 60, left: 80, ...margin };
  const innerWidth = width - updatedMargin.left - updatedMargin.right;
  const innerHeight = height - updatedMargin.top - updatedMargin.bottom;

  // Process data and create scales
  const { xScale, xSubScale, yScale, parentScale, colorScale } = useMemo(() => {
    // Create main x scale for categories
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([0, innerWidth])
      .padding(outerPadding);

    // Create sub x scale for groups within each category
    const xSubScale = d3
      .scaleBand()
      .domain(keys)
      .range([0, xScale.bandwidth()])
      .padding(innerPadding);

    const parentScale = d3
      .scaleBand()
      .domain(["2000", "2001"])
      .range([0, innerWidth]);

    // Find max value across all keys
    const maxValue =
      d3.max(data, (d) =>
        d3.max(keys, (key) =>
          typeof d[key] === "number" ? (d[key] as number) : 0
        )
      ) || 0;

    // Create y scale
    const yScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .nice()
      .range([innerHeight, 0]);

    // Create color scale
    const colorScale = d3.scaleOrdinal<string>().domain(keys).range(colors);

    return { xScale, xSubScale, parentScale, yScale, colorScale, maxValue };
  }, [data, keys, innerWidth, innerHeight, colors, outerPadding, innerPadding]);

  // Generate bars data
  const barsData = useMemo(() => {
    const bars: Array<{
      category: string;
      key: string;
      value: number;
      x: number;
      y: number;
      width: number;
      height: number;
      color: string;
    }> = [];

    data.forEach((d) => {
      const categoryX = xScale(d.category) || 0;
      keys.forEach((key) => {
        const value = typeof d[key] === "number" ? (d[key] as number) : 0;
        const subX = xSubScale(key) || 0;

        bars.push({
          category: d.category,
          key,
          value,
          x: categoryX + subX,
          y: yScale(value),
          width: xSubScale.bandwidth(),
          height: innerHeight - yScale(value),
          color: colorScale(key),
        });
      });
    });

    return bars;
  }, [data, keys, xScale, xSubScale, yScale, colorScale, innerHeight]);

  return (
    <ChartContainer>
      <Title>{title}</Title>

      {/* Legend */}
      {showLegend && (
        <LegendContainer>
          {keys.map((key, index) => (
            <LegendItem key={key}>
              <LegendColor color={colorScale(key)} />
              <span>{legendLabels?.[index] || key}</span>
            </LegendItem>
          ))}
        </LegendContainer>
      )}

      <svg width={width} height={height}>
        {/* Chart content */}
        <g transform={`translate(${updatedMargin.left}, ${updatedMargin.top})`}>
          {/* Grid lines */}
          {showGrid && (
            <Axis
              scale={yScale}
              orientation="left"
              transform="translate(0, 0)"
              grid={{
                show: true,
                size: innerWidth,
                style: {
                  stroke: "#f0f0f0",
                  opacity: "0.7",
                },
              }}
              tickCount={6}
              tickFormat={() => ""} // Hide tick labels for grid
            />
          )}

          {/* Bars */}
          {barsData.map((bar, index) => (
            <g key={`${bar.category}-${bar.key}`}>
              <rect
                x={bar.x}
                y={bar.y}
                width={bar.width}
                height={bar.height}
                fill={bar.color}
                opacity={0.8}
                style={{
                  transition: enableHover ? "opacity 0.2s ease" : "none",
                  cursor: enableHover ? "pointer" : "default",
                }}
                onMouseEnter={
                  enableHover
                    ? (e) => {
                        const rect = e.target as SVGRectElement;
                        rect.style.opacity = "1";

                        // Create tooltip
                        const tooltip = d3
                          .select("body")
                          .append("div")
                          .attr("class", "grouped-bar-tooltip")
                          .style("position", "absolute")
                          .style("background", "rgba(0, 0, 0, 0.8)")
                          .style("color", "white")
                          .style("padding", "8px 12px")
                          .style("border-radius", "4px")
                          .style("font-size", "12px")
                          .style("pointer-events", "none")
                          .style("opacity", 0)
                          .style("z-index", 1000);

                        tooltip
                          .html(
                            `
                    <strong>${bar.category}</strong><br/>
                    ${legendLabels?.[keys.indexOf(bar.key)] || bar.key}: ${yTickFormat(bar.value)}
                  `
                          )
                          .style("left", e.pageX + 10 + "px")
                          .style("top", e.pageY - 10 + "px")
                          .transition()
                          .duration(200)
                          .style("opacity", 1);
                      }
                    : undefined
                }
                onMouseLeave={
                  enableHover
                    ? (e) => {
                        const rect = e.target as SVGRectElement;
                        rect.style.opacity = "0.8";
                        d3.selectAll(".grouped-bar-tooltip").remove();
                      }
                    : undefined
                }
                onMouseMove={
                  enableHover
                    ? (e) => {
                        d3.selectAll(".grouped-bar-tooltip")
                          .style("left", e.pageX + 10 + "px")
                          .style("top", e.pageY - 10 + "px");
                      }
                    : undefined
                }
              />

              {/* Value labels on bars */}
              {showValues && bar.height > 20 && (
                <text
                  x={bar.x + bar.width / 2}
                  y={bar.y + bar.height / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="11px"
                  fontWeight="bold"
                  style={{ pointerEvents: "none" }}
                >
                  {yTickFormat(bar.value)}
                </text>
              )}
            </g>
          ))}
        </g>

        {/* Y-axis */}
        <Axis
          scale={yScale}
          orientation="left"
          transform={`translate(${updatedMargin.left}, ${updatedMargin.top})`}
          label={yAxisLabel}
          tickCount={6}
          tickFormat={yTickFormat}
          animationDuration={animationDuration}
          labelOffset={50}
        />

        {/* X-axis */}
        <Axis
          scale={xScale}
          parentScale={parentScale}
          orientation="bottom"
          transform={`translate(${updatedMargin.left}, ${height - updatedMargin.bottom})`}
          label={xAxisLabel}
          animationDuration={animationDuration}
          labelOffset={50}
        />
      </svg>
    </ChartContainer>
  );
};

export default GroupedBarChart;
