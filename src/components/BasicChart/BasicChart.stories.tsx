import type { Meta, StoryObj } from "@storybook/react";
import BasicChart from "./BasicChart";

// Sample data sets
const sampleData = [
  { name: "January", value: 30 },
  { name: "February", value: 45 },
  { name: "March", value: 60 },
  { name: "April", value: 35 },
  { name: "May", value: 80 },
  { name: "June", value: 55 },
];

const quarterlyData = [
  { name: "Q1", value: 125 },
  { name: "Q2", value: 180 },
  { name: "Q3", value: 95 },
  { name: "Q4", value: 200 },
];

const smallDataset = [
  { name: "A", value: 10 },
  { name: "B", value: 25 },
  { name: "C", value: 15 },
];

const largeDataset = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 35 },
  { name: "May", value: 80 },
  { name: "Jun", value: 55 },
  { name: "Jul", value: 70 },
  { name: "Aug", value: 85 },
  { name: "Sep", value: 65 },
  { name: "Oct", value: 90 },
  { name: "Nov", value: 75 },
  { name: "Dec", value: 95 },
];

const meta: Meta<typeof BasicChart> = {
  title: "Components/BasicChart",
  component: BasicChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable bar chart component built with React, D3.js, and styled-components. Features interactive tooltips and responsive design.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      description: "Array of data points to display in the chart",
      control: "object",
    },
    width: {
      description: "Width of the chart in pixels",
      control: { type: "range", min: 50, max: 1200, step: 50 },
    },
    height: {
      description: "Height of the chart in pixels",
      control: { type: "range", min: 200, max: 800, step: 50 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 300,
  },
};

// Different data variations
export const QuarterlyData: Story = {
  args: {
    data: quarterlyData,
    width: 500,
    height: 350,
  },
  parameters: {
    docs: {
      description: {
        story: "Chart displaying quarterly sales data with higher values.",
      },
    },
  },
};

export const SmallDataset: Story = {
  args: {
    data: smallDataset,
    width: 400,
    height: 250,
  },
  parameters: {
    docs: {
      description: {
        story: "Chart with a minimal dataset of only 3 data points.",
      },
    },
  },
};

export const LargeDataset: Story = {
  args: {
    data: largeDataset,
    width: 800,
    height: 400,
  },
  parameters: {
    docs: {
      description: {
        story: "Chart displaying a full year of monthly data.",
      },
    },
  },
};

// Size variations
export const SmallChart: Story = {
  args: {
    data: sampleData,
    width: 400,
    height: 200,
  },
  parameters: {
    docs: {
      description: {
        story: "Compact version of the chart suitable for dashboards.",
      },
    },
  },
};

export const LargeChart: Story = {
  args: {
    data: sampleData,
    width: 900,
    height: 500,
  },
  parameters: {
    docs: {
      description: {
        story: "Large chart ideal for detailed analysis and presentations.",
      },
    },
  },
};

// Interactive story with controls
export const Interactive: Story = {
  args: {
    data: sampleData,
    width: 700,
    height: 400,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive version where you can modify all properties using the controls panel.",
      },
    },
  },
};

// Empty state
export const EmptyData: Story = {
  args: {
    data: [],
    width: 600,
    height: 300,
  },
  parameters: {
    docs: {
      description: {
        story: "Chart behavior when no data is provided.",
      },
    },
  },
};
