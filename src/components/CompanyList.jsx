const CompanyList = ({ companies, deleteCompany }) => {
    return (
        <ul className="mt-4">
            {companies.length === 0 ? (
                <p>No companies found.</p>
            ) : (
                companies.map((company) => (
                    <li key={company.id} className="flex justify-between border-b p-2">
                        {company.name}
                        <button onClick={() => deleteCompany(company.id)} className="text-red-500">
                            Delete
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
};

export default CompanyList;
