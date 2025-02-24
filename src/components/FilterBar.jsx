const FilterBar = ({ filterCompanies }) => {
    return (
        <input
            type="text"
            placeholder="Filter companies"
            onChange={(e) => filterCompanies(e.target.value)}
            className="border p-2 w-full mb-4"
        />
    );
};

export default FilterBar;
