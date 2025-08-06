import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import Axis from "../Axis/Axis";

// Styled components
const ChartContainer = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

// TypeScript interfaces
interface DataPoint {
  name: string;
  value: number;
}

interface BasicChartProps {
  data: DataPoint[];
  width?: number;
  height?: number;
}

const BasicChart: React.FC<BasicChartProps> = ({
  data,
  width = 600,
  height = 300,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Create scales
  let xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.name))
    .range([0, innerWidth])
    .padding(0.1);

  let yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value) || 0])
    .range([innerHeight, 0]);

  useEffect(() => {
    if (!svgRef.current || !data.length) return;

    // Create scales
    xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, innerWidth])
      .padding(0.1);

    yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .range([innerHeight, 0]);

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    const chart = d3.select(svgRef.current);

    // Add bars
    chart
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.name) || 0)
      .attr("y", (d) => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d.value))
      .attr("fill", "#69b3a2")
      .on("mouseover", function (event, d) {
        d3.select(this).attr("fill", "#4a9b8e");

        // Add tooltip
        const tooltip = d3
          .select("body")
          .append("div")
          .attr("class", "tooltip")
          .style("opacity", 0)
          .style("position", "absolute")
          .style("background", "black")
          .style("color", "white")
          .style("padding", "5px")
          .style("border-radius", "3px")
          .style("pointer-events", "none");

        tooltip.transition().duration(200).style("opacity", 0.9);

        tooltip
          .html(`${d.name}: ${d.value}`)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", function () {
        d3.select(this).attr("fill", "#69b3a2");
        d3.selectAll(".tooltip").remove();
      });

    // // Add x-axis
    // chart
    //   .append("g")
    //   .attr("transform", `translate(0,${innerHeight})`)
    //   .call(d3.axisBottom(xScale));

    // Add y-axis
    chart.append("g").call(d3.axisLeft(yScale));
  }, [data, width, height]);

  return (
    <ChartContainer>
      <svg
        width={width}
        height={height}
        style={{ display: "block", margin: "0 auto" }}
      >
        <g
          ref={svgRef}
          className="main-chart"
          transform={`translate(${margin.left},${margin.top})`}
        ></g>
        <Axis
          scale={xScale}
          orientation="bottom"
          transform={`translate(${margin.left},${innerHeight + margin.top})`}
          label="Linear Scale"
          animationDuration={0}
        ></Axis>
      </svg>
    </ChartContainer>
  );
};

export default BasicChart;
