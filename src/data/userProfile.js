const userProfile = {
    name: "Jane Doe",
    email: "jane@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=8",
    bio: "Product designer with a passion for innovation.",
    credentials: "Verified Professional",
    joined: "2023-08-15",
    stats: {
      earnings: 2350,
      spending: 990,
      avgValue: 78,
      reputation: 92
    },
    ideasCreated: [
      { id: 101, title: "Green Home Automation", value: "$120", status: "published" },
      { id: 102, title: "Voice UX Toolkit", value: "$89", status: "draft" }
    ],
    ideasPurchased: [
      { id: 201, title: "AI Legal Assistant", value: "$149", date: "2024-10-04" }
    ],
    ideasSaved: [
      { id: 301, title: "Nano Learning App", value: "$49" }
    ],
    activity: [
      { type: "purchase", title: "AI Legal Assistant", date: "2024-10-04" },
      { type: "created", title: "Green Home Automation", date: "2024-05-02" },
      { type: "saved", title: "Nano Learning App", date: "2024-04-11" }
    ]
  };
  
  export default userProfile;
  