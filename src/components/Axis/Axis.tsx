import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components";

// Styled components
const AxisContainer = styled.g`
  .domain {
    stroke: currentColor;
  }

  .tick line {
    stroke: currentColor;
  }

  .tick text {
    fill: currentColor;
    font-size: 12px;
  }

  &.axis-x .tick text {
    text-anchor: middle;
  }

  &.axis-y .tick text {
    text-anchor: end;
  }
`;

// TypeScript interfaces
export type ScaleType =
  | d3.ScaleLinear<number, number>
  | d3.ScaleTime<number, number>
  | d3.ScaleBand<string>
  | d3.ScaleOrdinal<string, string>
  | d3.ScaleLog<number, number>
  | d3.ScalePow<number, number>
  | d3.ScaleQuantile<number>
  | d3.ScaleThreshold<number, string>;

export type AxisOrientation = "top" | "bottom" | "left" | "right";

export interface AxisProps {
  /** D3 scale function */
  scale: ScaleType;
  /** Axis orientation */
  orientation: AxisOrientation;
  /** Number of ticks (optional) */
  tickCount?: number;
  /** Custom tick values */
  tickValues?: (string | number | Date)[];
  /** Tick size in pixels */
  tickSize?: number;
  /** Inner tick size */
  tickSizeInner?: number;
  /** Outer tick size */
  tickSizeOuter?: number;
  /** Tick padding */
  tickPadding?: number;
  /** Custom tick format function */
  tickFormat?: (domainValue: any, index: number) => string;
  /** Axis label */
  label?: string;
  /** Label offset from axis */
  labelOffset?: number;
  /** Custom CSS class */
  className?: string;
  /** Custom styling */
  style?: React.CSSProperties;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Grid lines configuration */
  grid?: {
    show: boolean;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
  };
  /** Transform for positioning */
  transform?: string;
}

const Axis: React.FC<AxisProps> = ({
  scale,
  orientation,
  tickCount,
  tickValues,
  tickSize = 6,
  tickSizeInner,
  tickSizeOuter,
  tickPadding = 3,
  tickFormat,
  label,
  labelOffset = 40,
  className = "",
  style,
  animationDuration = 300,
  grid,
  transform = "translate(0,0)",
}) => {
  const axisRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!axisRef.current) return;

    const axisGroup = d3.select(axisRef.current);

    // Create axis generator based on orientation
    let axisGenerator: d3.Axis<any>;

    switch (orientation) {
      case "top":
        axisGenerator = d3.axisTop(scale);
        break;
      case "bottom":
        axisGenerator = d3.axisBottom(scale);
        break;
      case "left":
        axisGenerator = d3.axisLeft(scale);
        break;
      case "right":
        axisGenerator = d3.axisRight(scale);
        break;
      default:
        axisGenerator = d3.axisBottom(scale);
    }

    // Configure axis generator
    if (tickCount !== undefined) {
      axisGenerator.ticks(tickCount);
    }

    if (tickValues) {
      axisGenerator.tickValues(tickValues);
    }

    if (tickFormat) {
      axisGenerator.tickFormat(tickFormat);
    }

    if (tickSizeInner !== undefined) {
      axisGenerator.tickSizeInner(tickSizeInner);
    } else {
      axisGenerator.tickSizeInner(tickSize);
    }

    if (tickSizeOuter !== undefined) {
      axisGenerator.tickSizeOuter(tickSizeOuter);
    } else {
      axisGenerator.tickSizeOuter(tickSize);
    }

    axisGenerator.tickPadding(tickPadding);

    // Render axis with animation
    if (animationDuration > 0) {
      axisGroup.transition().duration(animationDuration).call(axisGenerator);
    } else {
      axisGroup.call(axisGenerator);
    }

    // Add grid lines if configured
    if (grid?.show) {
      const range = scale.range();
      const isVertical = orientation === "left" || orientation === "right";
      const gridSize =
        grid.size ||
        (isVertical
          ? Math.abs(range[1] - range[0])
          : Math.abs(range[1] - range[0]));

      let gridGenerator: d3.Axis<any>;

      switch (orientation) {
        case "top":
        case "bottom":
          gridGenerator = d3.axisBottom(scale).tickSize(-gridSize);
          break;
        case "left":
        case "right":
          gridGenerator = d3.axisLeft(scale).tickSize(-gridSize);
          break;
        default:
          gridGenerator = d3.axisBottom(scale).tickSize(-gridSize);
      }

      // Configure grid generator
      gridGenerator
        .tickFormat(() => "") // Remove tick labels for grid
        .tickSizeOuter(0);

      if (tickCount !== undefined) {
        gridGenerator.ticks(tickCount);
      }

      if (tickValues) {
        gridGenerator.tickValues(tickValues);
      }

      // Create or update grid
      let gridGroup = axisGroup.select(".grid");
      if (gridGroup.empty()) {
        gridGroup = axisGroup.append("g").attr("class", "grid");
      }

      gridGroup
        .attr("class", `grid ${grid.className || ""}`)
        .style("opacity", 0.1)
        .style("stroke", "#000");

      if (grid.style) {
        Object.entries(grid.style).forEach(([key, value]) => {
          gridGroup.style(key, value);
        });
      }

      if (animationDuration > 0) {
        gridGroup.transition().duration(animationDuration).call(gridGenerator);
      } else {
        gridGroup.call(gridGenerator);
      }
    }

    // Add axis label if provided
    if (label) {
      let labelGroup = axisGroup.select(".axis-label");
      if (labelGroup.empty()) {
        labelGroup = axisGroup.append("g").attr("class", "axis-label");
      }

      labelGroup.selectAll("text").remove();

      const labelText = labelGroup
        .append("text")
        .attr("class", "axis-label-text")
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "bold")
        .text(label);

      // Position label based on orientation
      const range = scale.range();
      const centerPosition = (range[0] + range[range.length - 1]) / 2;

      switch (orientation) {
        case "bottom":
          labelText.attr("x", centerPosition).attr("y", labelOffset);
          break;
        case "top":
          labelText.attr("x", centerPosition).attr("y", -labelOffset);
          break;
        case "left":
          labelText
            .attr("transform", `rotate(-90)`)
            .attr("x", -centerPosition)
            .attr("y", -labelOffset);
          break;
        case "right":
          labelText
            .attr("transform", `rotate(90)`)
            .attr("x", centerPosition)
            .attr("y", -labelOffset);
          break;
      }
    }
  }, [
    scale,
    orientation,
    tickCount,
    tickValues,
    tickSize,
    tickSizeInner,
    tickSizeOuter,
    tickPadding,
    tickFormat,
    label,
    labelOffset,
    animationDuration,
    grid,
  ]);

  return (
    <AxisContainer
      ref={axisRef}
      className={`axis axis-${orientation} ${className}`}
      style={style}
      transform={transform}
    />
  );
};

export default Axis;
