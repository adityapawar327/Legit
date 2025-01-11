"use client";
import Navbar from "@/components/navbar/navbar";
import ProfileSection from "./user-profile";

const Profile = ({ params }: { params: { id: any } }) => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <Navbar />
      <ProfileSection param={params.id} />
    </div>
  );
};

export default Profile;
