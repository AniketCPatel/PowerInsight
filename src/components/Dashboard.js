import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Paper,
} from "@mui/material";
import AddUsageDialog from "./AddUsageDialog";
import data from "../data.json";
import Chart from "chart.js/auto";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("January"); // Track selected month
  const [openDialog, setOpenDialog] = useState(false); // Dialog open/close state
  const { t } = useTranslation();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth]); // Fetch data whenever selected month changes

  const fetchData = () => {
    try {
      const monthData = data[selectedMonth];
      const labels = monthData.map((entry) => entry.date);
      const usageData = monthData.map((entry) => entry.usage);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: t("chart.label"),
            data: usageData,
            backgroundColor: "#36A2EB",
          },
        ],
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleAddUsage = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveUsage = (date, usage) => {
    const newData = [...data[selectedMonth], { date: date, usage: usage }];
    data[selectedMonth] = newData;

    // Update the data.json file
    // Here, you need to save newData to the data.json file
    // You can use localStorage, a server-side API, or any other method to save the data

    // For example, if using localStorage:
    localStorage.setItem("data", JSON.stringify(data));

    setChartData({
      ...chartData,
      labels: newData.map((entry) => entry.date),
      datasets: [
        {
          ...chartData.datasets[0],
          data: newData.map((entry) => entry.usage),
        },
      ],
    });
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <FormControl style={{ margin: "25px 0px" }} margin="dense">
          <InputLabel id="demo-simple-select-label">
            {t("month.label")}
          </InputLabel>
          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label={t("month.label")}
            size="small"
            sx={{ width: "200px" }}
          >
            <MenuItem value="January">{t("months.january")}</MenuItem>
            <MenuItem value="February">{t("months.february")}</MenuItem>
            <MenuItem value="March">{t("months.march")}</MenuItem>
            {/* Add other months */}
          </Select>
        </FormControl>
        <Button onClick={handleAddUsage} variant="contained" color="secondary">
          {t("addUsage.button")}
        </Button>
      </div>
      <Paper
        elevation={3}
        style={{
          width: "97%",
          height: "300px",
          margin: "auto",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Bar
          data={chartData}
          height={250}
          width={600}
          options={{
            scales: {
              x: {
                type: "category",
                title: {
                  display: true,
                  text: t("chart.xAxisLabel"),
                },
              },
              y: {
                title: {
                  display: true,
                  text: t("chart.yAxisLabel"),
                },
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </Paper>

      <AddUsageDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleSave={handleSaveUsage}
      />
    </div>
  );
}

export default Dashboard;
