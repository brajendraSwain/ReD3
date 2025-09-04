import type { Meta, StoryObj } from "@storybook/react";
import * as d3 from "d3";
import GroupedBarChart from "./GroupedBarChart";

// Sample datasets
const salesData = [
  { category: "Q1 2023", Online: 120, Retail: 80, Wholesale: 60 },
  { category: "Q2 2023", Online: 150, Retail: 95, Wholesale: 75 },
  { category: "Q3 2023", Online: 180, Retail: 110, Wholesale: 85 },
  { category: "Q4 2023", Online: 200, Retail: 125, Wholesale: 95 },
];

const performanceData = [
  { category: "Team A", Frontend: 85, Backend: 92, DevOps: 78, Testing: 88 },
  { category: "Team B", Frontend: 78, Backend: 85, DevOps: 90, Testing: 82 },
  { category: "Team C", Frontend: 92, Backend: 88, DevOps: 85, Testing: 95 },
  { category: "Team D", Frontend: 88, Backend: 90, DevOps: 92, Testing: 85 },
];

const budgetData = [
  { category: "Marketing", Planned: 50000, Actual: 48000, Variance: 2000 },
  { category: "Development", Planned: 120000, Actual: 125000, Variance: 5000 },
  { category: "Operations", Planned: 80000, Actual: 78000, Variance: 2000 },
  { category: "Sales", Planned: 60000, Actual: 65000, Variance: 5000 },
];

const monthlyData = [
  { category: "Jan", Revenue: 45000, Expenses: 32000, Profit: 13000 },
  { category: "Feb", Revenue: 52000, Expenses: 35000, Profit: 17000 },
  { category: "Mar", Revenue: 48000, Expenses: 33000, Profit: 15000 },
  { category: "Apr", Revenue: 58000, Expenses: 38000, Profit: 20000 },
  { category: "May", Revenue: 62000, Expenses: 40000, Profit: 22000 },
  { category: "Jun", Revenue: 55000, Expenses: 36000, Profit: 19000 },
];

const productData = [
  { category: "Product A", Sales: 1200, Returns: 45, Reviews: 320 },
  { category: "Product B", Sales: 950, Returns: 22, Reviews: 180 },
  { category: "Product C", Sales: 1800, Returns: 88, Reviews: 450 },
  { category: "Product D", Sales: 750, Returns: 15, Reviews: 95 },
  { category: "Product E", Sales: 1350, Returns: 62, Reviews: 275 },
];

const meta: Meta<typeof GroupedBarChart> = {
  title: "Components/GroupedBarChart",
  component: GroupedBarChart,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible grouped bar chart component for visualizing multi-dimensional data. Perfect for comparing multiple metrics across different categories.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      description:
        "Array of data objects with category and multiple numeric values",
      control: "object",
    },
    keys: {
      description: "Array of property names to group by",
      control: "object",
    },
    width: {
      description: "Chart width in pixels",
      control: { type: "range", min: 200, max: 1200, step: 50 },
    },
    height: {
      description: "Chart height in pixels",
      control: { type: "range", min: 300, max: 800, step: 50 },
    },
    title: {
      description: "Chart title",
      control: "text",
    },
    colors: {
      description: "Color scheme for bars",
      control: "object",
    },
    showLegend: {
      description: "Show/hide legend",
      control: "boolean",
    },
    legendLabels: {
      description: "Custom labels for legend items",
      control: "object",
    },
    animationDuration: {
      description: "Animation duration in milliseconds",
      control: { type: "range", min: 0, max: 1000, step: 100 },
    },
    innerPadding: {
      description: "Padding between bars within groups",
      control: { type: "range", min: 0, max: 0.5, step: 0.05 },
    },
    outerPadding: {
      description: "Padding between groups",
      control: { type: "range", min: 0, max: 0.5, step: 0.05 },
    },
    showGrid: {
      description: "Show grid lines",
      control: "boolean",
    },
    yAxisLabel: {
      description: "Y-axis label",
      control: "text",
    },
    xAxisLabel: {
      description: "X-axis label",
      control: "text",
    },
    showValues: {
      description: "Show values on bars",
      control: "boolean",
    },
    enableHover: {
      description: "Enable hover effects",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story - Sales data
export const Default: Story = {
  args: {
    data: salesData,
    keys: ["Online", "Retail", "Wholesale"],
    width: 800,
    height: 500,
    title: "Quarterly Sales by Channel",
    showLegend: true,
    showGrid: true,
    yAxisLabel: "Sales ($000)",
    xAxisLabel: "Quarter",
    enableHover: true,
  },
};

// Performance metrics
export const TeamPerformance: Story = {
  args: {
    data: performanceData,
    keys: ["Frontend", "Backend", "DevOps", "Testing"],
    width: 800,
    height: 500,
    title: "Team Performance Metrics",
    colors: ["#3498db", "#e74c3c", "#f39c12", "#2ecc71"],
    legendLabels: ["Frontend Dev", "Backend Dev", "DevOps", "QA Testing"],
    showLegend: true,
    showGrid: true,
    yAxisLabel: "Performance Score",
    xAxisLabel: "Teams",
    yTickFormat: d3.format(".0f"),
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Performance comparison across different teams with custom colors and labels.",
      },
    },
  },
};

// Budget analysis with variance
export const BudgetAnalysis: Story = {
  args: {
    data: budgetData,
    keys: ["Planned", "Actual", "Variance"],
    width: 700,
    height: 450,
    title: "Budget vs Actual Spending",
    colors: ["#34495e", "#e67e22"],
    legendLabels: ["Planned Budget", "Actual Spending"],
    showLegend: true,
    showGrid: true,
    yAxisLabel: "",
    xAxisLabel: "",
    yTickFormat: (d) => d3.format("$,.0f")(d),
    enableHover: true,
    margin: {
      left: 80,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Budget analysis comparing planned vs actual spending with currency formatting.",
      },
    },
  },
};

// Monthly financial data
export const MonthlyFinancials: Story = {
  args: {
    data: monthlyData,
    keys: ["Revenue", "Expenses", "Profit"],
    width: 900,
    height: 500,
    title: "Monthly Financial Performance",
    colors: ["#27ae60", "#e74c3c", "#3498db"],
    legendLabels: ["Revenue", "Expenses", "Net Profit"],
    showLegend: true,
    showGrid: true,
    yAxisLabel: "Amount ($)",
    xAxisLabel: "Month",
    yTickFormat: (d) => d3.format("$,.0f")(d),
    innerPadding: 0.05,
    outerPadding: 0.15,
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Monthly financial data showing revenue, expenses, and profit with tight bar spacing.",
      },
    },
  },
};

// Product metrics
export const ProductMetrics: Story = {
  args: {
    data: productData,
    keys: ["Sales", "Returns", "Reviews"],
    width: 800,
    height: 500,
    title: "Product Performance Overview",
    colors: Array.from(d3.schemeSet1),
    showLegend: true,
    showGrid: true,
    yAxisLabel: "Count",
    xAxisLabel: "Products",
    showValues: true,
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Product metrics with values displayed on bars and Set1 color scheme.",
      },
    },
  },
};

// Compact version
export const Compact: Story = {
  args: {
    data: salesData.slice(0, 3), // Only first 3 quarters
    keys: ["Online", "Retail"],
    width: 500,
    height: 350,
    title: "Compact Sales Chart",
    colors: ["#8e44ad", "#16a085"],
    showLegend: true,
    showGrid: false,
    yAxisLabel: "Sales",
    xAxisLabel: "Quarter",
    innerPadding: 0.2,
    outerPadding: 0.3,
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Compact version with fewer data points and no grid lines.",
      },
    },
  },
};

// Large dataset
export const ExtendedDataset: Story = {
  args: {
    data: [
      { category: "Jan", Desktop: 45, Mobile: 65, Tablet: 25 },
      { category: "Feb", Desktop: 52, Mobile: 72, Tablet: 28 },
      { category: "Mar", Desktop: 48, Mobile: 68, Tablet: 30 },
      { category: "Apr", Desktop: 58, Mobile: 78, Tablet: 35 },
      { category: "May", Desktop: 62, Mobile: 82, Tablet: 38 },
      { category: "Jun", Desktop: 55, Mobile: 75, Tablet: 32 },
      { category: "Jul", Desktop: 60, Mobile: 85, Tablet: 40 },
      { category: "Aug", Desktop: 58, Mobile: 80, Tablet: 36 },
      { category: "Sep", Desktop: 65, Mobile: 88, Tablet: 42 },
      { category: "Oct", Desktop: 70, Mobile: 92, Tablet: 45 },
      { category: "Nov", Desktop: 68, Mobile: 90, Tablet: 48 },
      { category: "Dec", Desktop: 75, Mobile: 95, Tablet: 50 },
    ],
    keys: ["Desktop", "Mobile", "Tablet"],
    width: 1000,
    height: 500,
    title: "Device Usage Throughout the Year",
    colors: ["#2c3e50", "#e74c3c", "#f39c12"],
    legendLabels: ["Desktop Users", "Mobile Users", "Tablet Users"],
    showLegend: true,
    showGrid: true,
    yAxisLabel: "Usage (%)",
    xAxisLabel: "Month",
    yTickFormat: (d) => `${d}%`,
    innerPadding: 0.1,
    outerPadding: 0.1,
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Extended dataset showing 12 months of device usage data.",
      },
    },
  },
};

// No legend version
export const WithoutLegend: Story = {
  args: {
    data: performanceData,
    keys: ["Frontend", "Backend"],
    width: 600,
    height: 400,
    title: "Frontend vs Backend Performance",
    colors: ["#3498db", "#e74c3c"],
    showLegend: false,
    showGrid: true,
    yAxisLabel: "Score",
    xAxisLabel: "Teams",
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Chart without legend, focusing on two metrics only.",
      },
    },
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    data: monthlyData.slice(0, 4),
    keys: ["Revenue", "Expenses"],
    width: 700,
    height: 450,
    title: "Custom Styled Revenue vs Expenses",
    colors: ["#1abc9c", "#e74c3c"],
    legendLabels: ["Monthly Revenue", "Monthly Expenses"],
    showLegend: true,
    showGrid: true,
    yAxisLabel: "USD ($)",
    xAxisLabel: "Time Period",
    yTickFormat: (d) => d3.format("$,.0s")(d),
    innerPadding: 0.15,
    outerPadding: 0.25,
    animationDuration: 800,
    showValues: false,
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Customized styling with specific colors, formatting, and animation timing.",
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    data: salesData,
    keys: ["Online", "Retail", "Wholesale"],
    width: 800,
    height: 500,
    title: "Interactive Grouped Bar Chart",
    colors: Array.from(d3.schemeCategory10),
    showLegend: true,
    showGrid: true,
    yAxisLabel: "Values",
    xAxisLabel: "Categories",
    innerPadding: 0.1,
    outerPadding: 0.2,
    animationDuration: 300,
    showValues: false,
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with different configurations and see how they affect the visualization.",
      },
    },
  },
};
