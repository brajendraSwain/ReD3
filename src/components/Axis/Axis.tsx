import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { AxisContainer } from "./Asix.styles";

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

// Helper: Get axis generator
function getAxisGenerator(
  orientation: AxisOrientation,
  scale: ScaleType
): d3.Axis<any> {
  switch (orientation) {
    case "top":
      return d3.axisTop(scale);
    case "bottom":
      return d3.axisBottom(scale);
    case "left":
      return d3.axisLeft(scale);
    case "right":
      return d3.axisRight(scale);
    default:
      return d3.axisBottom(scale);
  }
}

// Helper: Configure axis generator
function configureAxisGenerator(
  axisGenerator: d3.Axis<any>,
  scale: ScaleType,
  domain: any[],
  axisLength: number,
  tickLength: number,
  tickCount?: number,
  tickValues?: (string | number | Date)[],
  tickSize?: number,
  tickSizeInner?: number,
  tickSizeOuter?: number,
  tickPadding?: number,
  tickFormat?: (domainValue: any, index: number) => string
) {
  const dynamicTickCount = Math.floor(axisLength / tickLength);

  if (scale.ticks !== undefined) {
    // leaner, time, log, pow scales
    axisGenerator.ticks(tickCount ?? dynamicTickCount);
  } else {
    // ba
    const skipFactor = Math.ceil((domain.length * tickLength) / axisLength);
    const visibleLabels = domain.filter((_, i) => i % skipFactor === 0);
    axisGenerator.tickValues(visibleLabels);
  }

  if (tickFormat) axisGenerator.tickFormat(tickFormat);
  axisGenerator.tickSizeInner(tickSizeInner ?? tickSize ?? 6);
  axisGenerator.tickSizeOuter(tickSizeOuter ?? tickSize ?? 6);
  axisGenerator.tickPadding(tickPadding ?? 3);
}

// Helper: Configure grid generator
function configureGridGenerator(
  orientation: AxisOrientation,
  scale: ScaleType,
  gridSize: number,
  tickCount?: number,
  tickValues?: (string | number | Date)[]
): d3.Axis<any> {
  let gridGenerator: d3.Axis<any>;
  if (orientation === "top" || orientation === "bottom") {
    gridGenerator = d3.axisBottom(scale).tickSize(-gridSize);
  } else {
    gridGenerator = d3.axisLeft(scale).tickSize(-gridSize);
  }
  gridGenerator.tickFormat(() => "").tickSizeOuter(0);
  if (tickCount !== undefined) gridGenerator.ticks(tickCount);
  if (tickValues) gridGenerator.tickValues(tickValues);
  return gridGenerator;
}

// Helper: Render axis label
function renderAxisLabel(
  axisGroup: d3.Selection<SVGGElement, unknown, null, undefined>,
  orientation: AxisOrientation,
  label: string,
  labelOffset: number,
  range: number[]
) {
  let labelGroup: d3.Selection<d3.BaseType, unknown, null, undefined> =
    axisGroup.select(".axis-label");
  if (labelGroup.empty()) {
    labelGroup = axisGroup.append<d3.BaseType>("g").attr("class", "axis-label");
  }
  labelGroup.selectAll("text").remove();

  const centerPosition = (range[0] + range[range.length - 1]) / 2;
  const labelText = labelGroup
    .append("text")
    .attr("class", "axis-label-text")
    .style("text-anchor", "middle")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .text(label);

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

    // Axis generator setup
    const axisGenerator = getAxisGenerator(orientation, scale);
    const range = scale.range();
    const domain = scale.domain();
    const axisLength = Math.abs(range[range.length - 1] - range[0]);
    const tickLength =
      orientation === "top" || orientation === "bottom" ? 50 : 30;

    configureAxisGenerator(
      axisGenerator,
      scale,
      domain,
      axisLength,
      tickLength,
      tickCount,
      tickValues,
      tickSize,
      tickSizeInner,
      tickSizeOuter,
      tickPadding,
      tickFormat
    );

    // Render axis with animation
    if (animationDuration > 0) {
      axisGroup.transition().duration(animationDuration).call(axisGenerator);
    } else {
      axisGroup.call(axisGenerator);
    }

    // Grid lines
    if (grid?.show) {
      const isVertical = orientation === "left" || orientation === "right";
      const gridSize = grid.size ?? Math.abs(range[1] - range[0]);
      const gridGenerator = configureGridGenerator(
        orientation,
        scale,
        gridSize,
        tickCount,
        tickValues
      );

      let gridGroup: d3.Selection<SVGGElement, unknown, null, undefined> =
        axisGroup.select<SVGGElement>(".grid");
      if (gridGroup.empty()) {
        gridGroup = axisGroup.append<SVGGElement>("g").attr("class", "grid");
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

    // Axis label
    if (label) {
      renderAxisLabel(axisGroup, orientation, label, labelOffset, range);
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
