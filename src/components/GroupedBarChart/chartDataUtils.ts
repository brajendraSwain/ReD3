import * as d3 from "d3";
import type { GroupedDataPoint } from "./GroupedBarChart";

// Utility functions for generating sample data
export class ChartDataGenerator {
  /**
   * Generate random grouped bar chart data
   */
  static generateGroupedData(
    categories: string[],
    keys: string[],
    options: {
      minValue?: number;
      maxValue?: number;
      decimals?: number;
    } = {}
  ): GroupedDataPoint[] {
    const { minValue = 0, maxValue = 100, decimals = 0 } = options;

    return categories.map((category) => {
      const dataPoint: GroupedDataPoint = { category };

      keys.forEach((key) => {
        const value = Math.random() * (maxValue - minValue) + minValue;
        dataPoint[key] =
          decimals > 0
            ? parseFloat(value.toFixed(decimals))
            : Math.round(value);
      });

      return dataPoint;
    });
  }

  /**
   * Generate time-series grouped data
   */
  static generateTimeSeriesGroupedData(
    startDate: Date,
    endDate: Date,
    keys: string[],
    interval: "day" | "week" | "month" | "quarter" = "month",
    options: {
      minValue?: number;
      maxValue?: number;
      trend?: "increasing" | "decreasing" | "random";
      seasonality?: boolean;
    } = {}
  ): GroupedDataPoint[] {
    const {
      minValue = 0,
      maxValue = 100,
      trend = "random",
      seasonality = false,
    } = options;

    const timeScale = d3.scaleTime().domain([startDate, endDate]);
    const dates: Date[] = [];

    // Generate date intervals
    let current = new Date(startDate);
    while (current <= endDate) {
      dates.push(new Date(current));

      switch (interval) {
        case "day":
          current.setDate(current.getDate() + 1);
          break;
        case "week":
          current.setDate(current.getDate() + 7);
          break;
        case "month":
          current.setMonth(current.getMonth() + 1);
          break;
        case "quarter":
          current.setMonth(current.getMonth() + 3);
          break;
      }
    }

    return dates.map((date, index) => {
      const dataPoint: GroupedDataPoint = {
        category: d3.timeFormat("%b %Y")(date),
      };

      keys.forEach((key) => {
        let baseValue = Math.random() * (maxValue - minValue) + minValue;

        // Apply trend
        if (trend === "increasing") {
          baseValue += (index / dates.length) * (maxValue - minValue) * 0.5;
        } else if (trend === "decreasing") {
          baseValue -= (index / dates.length) * (maxValue - minValue) * 0.5;
        }

        // Apply seasonality
        if (seasonality) {
          const month = date.getMonth();
          const seasonalFactor = Math.sin((month / 12) * 2 * Math.PI) * 0.3;
          baseValue *= 1 + seasonalFactor;
        }

        dataPoint[key] = Math.max(minValue, Math.round(baseValue));
      });

      return dataPoint;
    });
  }

  /**
   * Generate business metrics data
   */
  static generateBusinessMetrics(
    departments: string[],
    metrics: string[] = ["Budget", "Actual", "Target"],
    budgetRange: [number, number] = [50000, 200000]
  ): GroupedDataPoint[] {
    return departments.map((department) => {
      const budget =
        Math.random() * (budgetRange[1] - budgetRange[0]) + budgetRange[0];
      const variance = (Math.random() - 0.5) * 0.2;

      const dataPoint: GroupedDataPoint = { category: department };

      metrics.forEach((metric) => {
        switch (metric.toLowerCase()) {
          case "budget":
          case "planned":
            dataPoint[metric] = Math.round(budget);
            break;
          case "actual":
            dataPoint[metric] = Math.round(budget * (1 + variance));
            break;
          case "target":
            dataPoint[metric] = Math.round(budget * 1.1); // 10% above budget
            break;
          default:
            dataPoint[metric] = Math.round(
              budget * (0.8 + Math.random() * 0.4)
            );
        }
      });

      return dataPoint;
    });
  }

  /**
   * Generate performance data for teams/individuals
   */
  static generatePerformanceData(
    entities: string[],
    skills: string[] = ["Frontend", "Backend", "DevOps", "Testing"],
    scoreRange: [number, number] = [60, 100]
  ): GroupedDataPoint[] {
    return entities.map((entity) => {
      const dataPoint: GroupedDataPoint = { category: entity };

      skills.forEach((skill) => {
        const baseScore =
          Math.random() * (scoreRange[1] - scoreRange[0]) + scoreRange[0];
        // Add some correlation - if one skill is high, others tend to be higher too
        const entityBias = (Math.random() - 0.5) * 20;
        dataPoint[skill] = Math.min(
          scoreRange[1],
          Math.max(scoreRange[0], Math.round(baseScore + entityBias))
        );
      });

      return dataPoint;
    });
  }

  /**
   * Generate sales data by channel/region
   */
  static generateSalesData(
    periods: string[],
    channels: string[] = ["Online", "Retail", "Wholesale"],
    salesRange: [number, number] = [10000, 100000],
    options: {
      growth?: boolean;
      seasonality?: boolean;
    } = {}
  ): GroupedDataPoint[] {
    const { growth = true, seasonality = false } = options;

    return periods.map((period, index) => {
      const dataPoint: GroupedDataPoint = { category: period };

      channels.forEach((channel) => {
        let baseSales =
          Math.random() * (salesRange[1] - salesRange[0]) + salesRange[0];

        // Apply growth trend
        if (growth) {
          const growthFactor = 1 + (index / periods.length) * 0.3; // Up to 30% growth
          baseSales *= growthFactor;
        }

        // Apply seasonality (assuming periods are months)
        if (seasonality) {
          const seasonalMultiplier =
            0.8 + 0.4 * Math.sin((index / 12) * 2 * Math.PI + Math.PI / 2);
          baseSales *= seasonalMultiplier;
        }

        // Channel-specific multipliers
        const channelMultipliers: { [key: string]: number } = {
          Online: 1.2,
          Retail: 1.0,
          Wholesale: 0.8,
          Mobile: 1.1,
          Desktop: 0.9,
        };

        const multiplier = channelMultipliers[channel] || 1;
        dataPoint[channel] = Math.round(baseSales * multiplier);
      });

      return dataPoint;
    });
  }

  /**
   * Generate survey/rating data
   */
  static generateSurveyData(
    categories: string[],
    questions: string[],
    ratingScale: [number, number] = [1, 5]
  ): GroupedDataPoint[] {
    return categories.map((category) => {
      const dataPoint: GroupedDataPoint = { category };

      questions.forEach((question) => {
        const rating =
          Math.random() * (ratingScale[1] - ratingScale[0]) + ratingScale[0];
        dataPoint[question] = Math.round(rating * 10) / 10; // Round to 1 decimal
      });

      return dataPoint;
    });
  }

  /**
   * Generate financial data (revenue, expenses, profit)
   */
  static generateFinancialData(
    periods: string[],
    metrics: string[] = ["Revenue", "Expenses", "Profit"],
    revenueRange: [number, number] = [100000, 500000]
  ): GroupedDataPoint[] {
    return periods.map((period) => {
      const revenue =
        Math.random() * (revenueRange[1] - revenueRange[0]) + revenueRange[0];
      const expenseRatio = 0.6 + Math.random() * 0.3; // 60-90% of revenue
      const expenses = revenue * expenseRatio;
      const profit = revenue - expenses;

      const dataPoint: GroupedDataPoint = { category: period };

      metrics.forEach((metric) => {
        switch (metric.toLowerCase()) {
          case "revenue":
          case "income":
            dataPoint[metric] = Math.round(revenue);
            break;
          case "expenses":
          case "costs":
            dataPoint[metric] = Math.round(expenses);
            break;
          case "profit":
          case "net":
            dataPoint[metric] = Math.round(profit);
            break;
          default:
            dataPoint[metric] = Math.round(
              revenue * (0.5 + Math.random() * 0.5)
            );
        }
      });

      return dataPoint;
    });
  }

  /**
   * Transform data for different chart requirements
   */
  static transformData(
    data: GroupedDataPoint[],
    transformations: {
      normalize?: boolean; // Convert to percentages
      cumulative?: boolean; // Convert to cumulative values
      difference?: boolean; // Show differences from first value
    } = {}
  ): GroupedDataPoint[] {
    const { normalize, cumulative, difference } = transformations;

    if (!normalize && !cumulative && !difference) return data;

    // Get all numeric keys
    const numericKeys = Object.keys(data[0] || {}).filter(
      (key) => key !== "category" && typeof data[0][key] === "number"
    );

    if (normalize) {
      return data.map((row) => {
        const newRow: GroupedDataPoint = { category: row.category };
        const total = numericKeys.reduce(
          (sum, key) => sum + ((row[key] as number) || 0),
          0
        );

        numericKeys.forEach((key) => {
          newRow[key] =
            total > 0
              ? Math.round((((row[key] as number) || 0) / total) * 100)
              : 0;
        });

        return newRow;
      });
    }

    if (cumulative) {
      const cumulativeData: GroupedDataPoint[] = [];
      const runningTotals: { [key: string]: number } = {};

      numericKeys.forEach((key) => {
        runningTotals[key] = 0;
      });

      data.forEach((row) => {
        const newRow: GroupedDataPoint = { category: row.category };

        numericKeys.forEach((key) => {
          runningTotals[key] += (row[key] as number) || 0;
          newRow[key] = runningTotals[key];
        });

        cumulativeData.push(newRow);
      });

      return cumulativeData;
    }

    if (difference && data.length > 0) {
      const baseline = data[0];

      return data.map((row) => {
        const newRow: GroupedDataPoint = { category: row.category };

        numericKeys.forEach((key) => {
          const currentValue = (row[key] as number) || 0;
          const baseValue = (baseline[key] as number) || 0;
          newRow[key] = currentValue - baseValue;
        });

        return newRow;
      });
    }

    return data;
  }
}

// Predefined datasets for quick testing
export const SampleDatasets = {
  quarterlyRevenue: ChartDataGenerator.generateSalesData(
    ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023"],
    ["Online", "Retail", "Wholesale"],
    [80000, 200000],
    { growth: true }
  ),

  teamPerformance: ChartDataGenerator.generatePerformanceData(
    ["Alpha Team", "Beta Team", "Gamma Team", "Delta Team"],
    ["Frontend", "Backend", "DevOps", "Testing"],
    [70, 95]
  ),

  monthlyFinancials: ChartDataGenerator.generateFinancialData(
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    ["Revenue", "Expenses", "Profit"],
    [150000, 300000]
  ),

  departmentBudgets: ChartDataGenerator.generateBusinessMetrics(
    ["Marketing", "Engineering", "Sales", "Operations", "HR"],
    ["Planned", "Actual", "Target"],
    [75000, 250000]
  ),

  userSatisfaction: ChartDataGenerator.generateSurveyData(
    ["Product A", "Product B", "Product C", "Product D"],
    ["Usability", "Performance", "Design", "Support"],
    [3, 5]
  ),

  deviceUsage: ChartDataGenerator.generateTimeSeriesGroupedData(
    new Date("2024-01-01"),
    new Date("2024-06-01"),
    ["Desktop", "Mobile", "Tablet"],
    "month",
    { minValue: 20, maxValue: 80, trend: "random", seasonality: true }
  ),
};

export default ChartDataGenerator;
