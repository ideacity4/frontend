// src/pages/IdeaDetails.js
import IdeaHeader from "../components/IdeaHeader";
import IdeaContent from "../components/IdeaContent"
import featuredIdeas from "../data/featuredIdeas"; // to simulate data
import React from "react";
import { useParams } from "react-router-dom";
import ActionPanel from "../components/ActionPanel";
import RelatedIdeas from "../components/RelatedIdeas";
import { useState } from "react";


export default function IdeaDetails() {
  const { id } = useParams();
  const idea = featuredIdeas.find((idea) => idea.id === parseInt(id));
  const [saved, setSaved] = useState(false);
  const related = featuredIdeas
  .filter((item) => item.category === idea.category && item.id !== idea.id)
  .slice(0, 4); // limit suggestions


  if (!idea) {
    return <div className="p-6 text-red-500">Idea not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <IdeaHeader
        title={idea.title}
        user={idea.user}
        verified={idea.verified}
        score={idea.score}
        datePosted={idea.datePosted}
      />
      <IdeaContent
        description={idea.description}
        images={idea.images || []}
        tags={idea.tags || ["innovation", "tech"]}
      />
      <ActionPanel
        price={idea.price}
        saved={saved}
        onSaveToggle={() => setSaved(!saved)}
      />
      <RelatedIdeas ideas={related} />
    </div>
  );
}
