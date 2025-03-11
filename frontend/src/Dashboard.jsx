import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL; // Using environment variable

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDashboardData(response.data.dashboardData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  const handleDeleteRoom = async (roomId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BASE_URL}/api/dashboard/room/${roomId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDashboardData(dashboardData.filter((room) => room.roomId !== roomId));
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  const handleExportCSV = (roomId) => {
    const token = localStorage.getItem("token");
    window.open(`${BASE_URL}/api/dashboard/export/${roomId}?token=${token}`, "_blank");
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {dashboardData.length === 0 ? (
        <p>No rooms available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Total Feedbacks</th>
              <th>Positive</th>
              <th>Neutral</th>
              <th>Negative</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.map((room) => (
              <tr key={room.roomId}>
                <td>{room.roomName}</td>
                <td>{room.totalFeedbacks}</td>
                <td>{room.sentimentCounts.positive}</td>
                <td>{room.sentimentCounts.neutral}</td>
                <td>{room.sentimentCounts.negative}</td>
                <td>
                  <button onClick={() => handleExportCSV(room.roomId)}>Export CSV</button>
                  <button onClick={() => handleDeleteRoom(room.roomId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;