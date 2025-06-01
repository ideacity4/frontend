import React from "react";

const IdeaContent = ({ description, images = [], tags = [] }) => {
  return (
    <div className="mt-8 space-y-6">
      {/* Full Description */}
      <div>
        <h2 className="text-xl font-semibold text-secondary mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
      </div>

      {/* Supporting Images */}
      {images.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-secondary mb-2">Supporting Files</h2>
          <div className="flex flex-wrap gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`support-${i}`}
                className="w-40 h-40 object-cover rounded border"
              />
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-secondary mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaContent;
