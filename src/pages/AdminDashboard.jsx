import React, { useEffect, useState } from "react";
import axios from "axios";
import LineChart from "../components/LIneChart";
import { FaUser } from "react-icons/fa";

const AdminDashboard = () => {
  const [visitorData, setVisitorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Contoh: mengambil data pengunjung (menggunakan dummy data)
    const fetchVisitorData = async () => {
      try {
        // Jika nanti ada API nyata, kamu bisa menggunakan axios di sini.
        // const response = await axios.get('/api/visitor-data');

        // Dummy data:
        const dummyData = {
          visitors: [
            { date: "2025-02-20", count: 120 },
            { date: "2025-02-21", count: 150 },
            { date: "2025-02-22", count: 170 },
            { date: "2025-02-23", count: 130 },
            { date: "2025-02-24", count: 190 },
            { date: "2025-02-25", count: 210 },
            { date: "2025-02-26", count: 180 },
          ],
        };

        setVisitorData(dummyData);
      } catch (error) {
        console.error("Error fetching visitor data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorData();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  // Persiapkan data untuk grafik
  const dates = visitorData.visitors.map((item) => item.date);
  const counts = visitorData.visitors.map((item) => item.count);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: "Pengunjung",
        data: counts,
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Data Pengunjung Harian",
      },
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Total Pengunjung */}
        <div className="bg-white p-4 rounded shadow flex items-center">
          <div className="p-3 rounded-full bg-blue-500 text-white mr-4">
            <FaUser size={24} />
          </div>
          <div>
            <p className="text-gray-600">Total Pengunjung</p>
            <p className="text-2xl font-bold">
              {visitorData.visitors.reduce((sum, item) => sum + item.count, 0)}
            </p>
          </div>
        </div>
        {/* Tambahkan card lain jika diperlukan */}
      </div>

      <div className="mt-8 bg-white p-4 rounded shadow">
        <LineChart data={chartData} options={chartOptions} />
      </div>

      {/* Komponen tambahan, seperti tabel data atau grafik lainnya, bisa ditambahkan di sini */}
    </div>
  );
};

export default AdminDashboard;
