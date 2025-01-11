import Navbar from "@/components/navbar/navbar";
import DashboardComponent from "./dashboard";

const Dashboard = () => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <Navbar />
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
