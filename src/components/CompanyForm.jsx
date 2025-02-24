import { useState } from "react";

const CompanyForm = ({ addCompany }) => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        addCompany({ id: Date.now(), name }); // setting a specific ID that isn't just 1, 2, 3 (accounts for when companies are deleted)
        setName("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                placeholder="Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                Add
            </button>
        </form>
    );
};

export default CompanyForm;
