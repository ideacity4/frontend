import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import ProfileTabs from "../components/ProfileTabs";
import TabContent from "../components/TabContent";
import UserStats from "../components/UserStats";

const tabs = ["My Ideas", "Purchased", "Saved", "History"];

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("My Ideas");
  const [user, setUser] = useState(null);
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_URI;

  const handleUploadClick = () => {
    navigate("/verify");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email"); // stored after login
        console.log(email);

        const res = await fetch(`${baseUrl}/api/users/get`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }

        });
        
        const data = await res.json();
        console.log(data)

        if (res.ok) {
          setUser({
            name: data.name,
            email: data.email,
            // role: data.role,
            avatar: "https://i.pravatar.cc/100", // static avatar
            bio: "Passionate innovator & creator.", // static bio
            credentials: "Verified Professional", // static credentials
            joined: "2023-08-15" // static join date
          });
          console.log('done')
        } else {
          setError(data.error || "Failed to load user");
        }
        const ideasRes = await fetch(`${baseUrl}/api/ideas/my`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const ideasData = await ideasRes.json();

        if (ideasRes.ok) {
          // Map API data to frontend format
          const mappedIdeas = ideasData.map((idea) => ({
            id: idea._id,
            title: idea.title,
            value: `$${idea.price}`,
            status: idea.status,
            date: new Date(idea.created_at).toLocaleDateString()
          }));
          setIdeas(mappedIdeas);
        } else {
          setError(ideasData.error || "Failed to load ideas");
        }
      } catch (err) {
        setError("Network error, please try again");
      }
    };

    fetchUser();
  }, []);

  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!user) return <div className="p-6">Loading user profile...</div>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary">User Profile</h1>
        <button
          onClick={handleUploadClick}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Upload Ideas
        </button>
      </div>

      <UserInfo user={user} />
      <UserStats stats={{ earnings: 0, spending: 0, avgValue: 0, reputation: 0 }} />

      <ProfileTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      <TabContent user={{ ideasCreated: ideas, ideasPurchased: ideas, ideasSaved: ideas, activity: [] }} activeTab={activeTab} />
    </div>
  );
}