import React from "react";

const TabContent = ({ user, activeTab }) => {
  const renderIdeas = (ideas) => (
    <ul className="space-y-3 mt-4">
      {ideas.map((idea) => (
        <li
          key={idea.id}
          className="p-4 bg-gray-50 border rounded-md flex justify-between items-center"
        >
          <div>
            <p className="font-semibold text-secondary">{idea.title}</p>
            <p className="text-sm text-gray-600">{idea.value}</p>
            {idea.status && (
              <p className="text-xs text-gray-400">Status: {idea.status}</p>
            )}
            {idea.date && (
              <p className="text-xs text-gray-400">Date: {idea.date}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  const renderHistory = () => (
    <ul className="space-y-3 mt-4">
      {user.activity.map((item, i) => (
        <li
          key={i}
          className="p-4 bg-white border rounded-md flex justify-between text-sm text-gray-700"
        >
          <span className="capitalize">{item.type} - {item.title}</span>
          <span className="text-gray-500">{item.date}</span>
        </li>
      ))}
    </ul>
  );

  if (activeTab === "My Ideas") return renderIdeas(user.ideasCreated);
  if (activeTab === "Purchased") return renderIdeas(user.ideasPurchased);
  if (activeTab === "Saved") return renderIdeas(user.ideasSaved);
  if (activeTab === "History") return renderHistory();

  return null;
};

export default TabContent;
