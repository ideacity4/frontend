import React, { useState } from "react";

const VerificationForm = ({ idea, onNext }) => {
  const [title, setTitle] = useState(idea.title || "");
  const [description, setDescription] = useState(idea.description || "");
  const [price, setPrice] = useState(idea.price || 0);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URI;

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const token = localStorage.getItem("token");
    console.log("token",token);
    const userId = localStorage.getItem("userId"); // make sure you store this after login

    const payload = {
      title,
      description,
      price: parseFloat(price)
    };

    try {
      const res = await fetch(`${baseUrl}/api/ideas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.status === 201) {
        alert("Idea created successfully!");
        onNext();
      } else {
        setError(data.error || "Failed to create idea");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && <p className="text-red-600 text-sm">{error}</p>}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Idea Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g. AI Resume Optimizer"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Idea Price (USD)</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          min="0"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="e.g. 49"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Idea Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="w-full p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Briefly describe your idea..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Supporting Documents</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-blue-600"
        />
        {files.length > 0 && (
          <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="bg-gray-50 border rounded-md p-4">
        <h3 className="font-semibold text-sm mb-2 text-secondary">Verification Criteria</h3>
        <ul className="list-disc text-sm pl-5 text-gray-600 space-y-1">
          <li>Originality and uniqueness of the idea</li>
          <li>Presence of similar existing ideas</li>
          <li>Supporting documents and clarity</li>
        </ul>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Next: Run Analysis →"}
        </button>
      </div>
    </form>
  );
};

export default VerificationForm;
