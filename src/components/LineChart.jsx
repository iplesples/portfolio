import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Registrasi semua komponen Chart.js yang diperlukan
Chart.register(...registerables);

const LineChart = ({ data, options }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Jika ada chart sebelumnya, hancurkan untuk mencegah duplikasi
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    // Buat chart baru
    chartInstanceRef.current = new Chart(canvasRef.current, {
      type: "line",
      data,
      options,
    });

    // Bersihkan chart saat komponen di-unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, options]);

  return <canvas ref={canvasRef} />;
};

export default LineChart;
