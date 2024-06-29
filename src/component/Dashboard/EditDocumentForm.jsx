import { useState } from "react";

const EditDocumentForm = ({ rowData, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState(rowData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="owner">
            Owner
          </label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={editedData.owner}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={editedData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 duration-150 rounded">
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 duration-150 text-white rounded">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditDocumentForm;
