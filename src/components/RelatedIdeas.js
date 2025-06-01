import React from "react";
import IdeaCard from "./IdeaCard";

const RelatedIdeas = ({ ideas = [] }) => {
  if (!ideas.length) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4 text-secondary">Related Ideas</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {ideas.map((idea) => (
          <div key={idea.id} className="min-w-[280px]">
            <IdeaCard idea={idea} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedIdeas;
