import type { Meta, StoryObj } from "@storybook/react";
import * as d3 from "d3";
import Axis from "./Axis";

// Wrapper component for better story visualization
const AxisWrapper = ({
  children,
  width = 500,
  height = 300,
}: {
  children: React.ReactNode;
  width?: number;
  height?: number;
}) => (
  <svg width={width} height={height} style={{ border: "1px solid #ccc" }}>
    {children}
  </svg>
);

// Sample data and scales
const linearData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const timeData = [
  new Date("2024-01-01"),
  new Date("2024-02-01"),
  new Date("2024-03-01"),
  new Date("2024-04-01"),
  new Date("2024-05-01"),
  new Date("2024-06-01"),
];
const categoricalData = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

const meta: Meta<typeof Axis> = {
  title: "Components/Axis",
  component: Axis,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible, reusable D3 axis component that supports various scale types and orientations. Perfect for building different types of charts.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <AxisWrapper>
        <Story />
      </AxisWrapper>
    ),
  ],
  argTypes: {
    scale: {
      description: "D3 scale function",
      control: false,
    },
    orientation: {
      description: "Axis orientation",
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    tickCount: {
      description: "Number of ticks",
      control: { type: "range", min: 2, max: 20, step: 1 },
    },
    tickSize: {
      description: "Tick size in pixels",
      control: { type: "range", min: 0, max: 20, step: 1 },
    },
    tickPadding: {
      description: "Tick padding",
      control: { type: "range", min: 0, max: 20, step: 1 },
    },
    label: {
      description: "Axis label",
      control: "text",
    },
    labelOffset: {
      description: "Label offset from axis",
      control: { type: "range", min: 10, max: 80, step: 5 },
    },
    animationDuration: {
      description: "Animation duration in milliseconds",
      control: { type: "range", min: 0, max: 1000, step: 50 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Linear Scale Stories
export const LinearBottom: Story = {
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Linear Scale",
    tickCount: 6,
  },
  parameters: {
    docs: {
      description: {
        story: "Bottom-oriented axis with linear scale.",
      },
    },
  },
};

export const LinearLeft: Story = {
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([250, 50]),
    orientation: "left",
    transform: "translate(50, 0)",
    label: "Values",
    tickCount: 6,
  },
  parameters: {
    docs: {
      description: {
        story: "Left-oriented axis with linear scale.",
      },
    },
  },
};

// Time Scale Stories
export const TimeScale: Story = {
  args: {
    scale: d3
      .scaleTime()
      .domain([new Date("2024-01-01"), new Date("2024-06-01")])
      .range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Time Period",
    tickFormat: d3.timeFormat("%b %Y"),
  },
  parameters: {
    docs: {
      description: {
        story: "Time scale with custom date formatting.",
      },
    },
  },
};

// Band Scale Stories
export const BandScale: Story = {
  args: {
    scale: d3.scaleBand().domain(categoricalData).range([50, 450]).padding(0.1),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Categories",
  },
  parameters: {
    docs: {
      description: {
        story: "Band scale for categorical data.",
      },
    },
  },
};

// Grid Lines
export const WithGridLines: Story = {
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([250, 50]),
    orientation: "left",
    transform: "translate(50, 0)",
    label: "Values with Grid",
    tickCount: 6,
    grid: {
      show: true,
      size: 400,
      style: {
        stroke: "#e0e0e0",
        opacity: "0.5",
      },
    },
  },
  decorators: [
    (Story) => (
      <AxisWrapper width={500} height={300}>
        <Story />
        {/* Add a bottom axis for reference */}
        <Axis
          scale={d3.scaleLinear().domain([0, 50]).range([50, 450])}
          orientation="bottom"
          transform="translate(0, 250)"
          label="X Values"
        />
      </AxisWrapper>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Axis with grid lines for better data reading.",
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Styled Axis",
    tickCount: 8,
    tickSize: 10,
    tickPadding: 10,
    style: {
      color: "#4a90e2",
      fontSize: "14px",
      fontWeight: "bold",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Axis with custom styling and colors.",
      },
    },
  },
};

// Log Scale
export const LogScale: Story = {
  args: {
    scale: d3.scaleLog().domain([1, 1000]).range([250, 50]),
    orientation: "left",
    transform: "translate(50, 0)",
    label: "Log Scale",
    tickFormat: d3.format(".0s"),
  },
  parameters: {
    docs: {
      description: {
        story: "Logarithmic scale with scientific notation formatting.",
      },
    },
  },
};

// Custom Tick Values
export const CustomTickValues: Story = {
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Custom Ticks",
    tickValues: [0, 25, 50, 75, 100],
    tickFormat: (d) => `${d}%`,
  },
  parameters: {
    docs: {
      description: {
        story: "Axis with custom tick values and percentage formatting.",
      },
    },
  },
};

// Multiple Orientations Demo
export const MultipleOrientations: Story = {
  render: () => (
    <AxisWrapper width={600} height={400}>
      {/* Bottom axis */}
      <Axis
        scale={d3.scaleLinear().domain([0, 100]).range([80, 520])}
        orientation="bottom"
        transform="translate(0, 320)"
        label="Bottom Axis"
        tickCount={6}
      />

      {/* Top axis */}
      <Axis
        scale={d3.scaleLinear().domain([0, 100]).range([80, 520])}
        orientation="top"
        transform="translate(0, 80)"
        label="Top Axis"
        tickCount={6}
      />

      {/* Left axis */}
      <Axis
        scale={d3.scaleLinear().domain([0, 50]).range([320, 80])}
        orientation="left"
        transform="translate(80, 0)"
        label="Left Axis"
        tickCount={6}
      />

      {/* Right axis */}
      <Axis
        scale={d3.scaleLinear().domain([0, 50]).range([320, 80])}
        orientation="right"
        transform="translate(520, 0)"
        label="Right Axis"
        tickCount={6}
      />
    </AxisWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstration of all four axis orientations together.",
      },
    },
  },
};

// Chart-like Demo
export const ChartExample: Story = {
  render: () => {
    const xScale = d3
      .scaleTime()
      .domain([new Date("2024-01-01"), new Date("2024-12-31")])
      .range([80, 520]);

    const yScale = d3.scaleLinear().domain([0, 100]).range([320, 80]);

    return (
      <AxisWrapper width={600} height={400}>
        {/* Grid background */}
        <Axis
          scale={yScale}
          orientation="left"
          transform="translate(80, 0)"
          grid={{
            show: true,
            size: 440,
            style: { stroke: "#f0f0f0", opacity: "0.8" },
          }}
        />

        <Axis
          scale={xScale}
          orientation="bottom"
          transform="translate(0, 320)"
          grid={{
            show: true,
            size: 240,
            style: { stroke: "#f0f0f0", opacity: "0.8" },
          }}
        />

        {/* Main axes */}
        <Axis
          scale={yScale}
          orientation="left"
          transform="translate(80, 0)"
          label="Revenue ($000)"
          tickCount={6}
          tickFormat={d3.format("$,.0f")}
        />

        <Axis
          scale={xScale}
          orientation="bottom"
          transform="translate(0, 320)"
          label="Time Period"
          tickFormat={d3.timeFormat("%b")}
        />

        {/* Sample data line */}
        <path
          d="M80,200 L150,180 L220,160 L290,140 L360,120 L430,100 L500,110 L520,90"
          fill="none"
          stroke="#4a90e2"
          strokeWidth="2"
        />
      </AxisWrapper>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how axes work together in a chart context with grid lines and sample data.",
      },
    },
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    scale: d3.scaleLinear().domain([0, 100]).range([50, 450]),
    orientation: "bottom",
    transform: "translate(0, 250)",
    label: "Interactive Axis",
    tickCount: 5,
    tickSize: 6,
    tickPadding: 3,
    animationDuration: 300,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with different axis configurations.",
      },
    },
  },
};
