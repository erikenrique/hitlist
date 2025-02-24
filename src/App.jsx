import { useEffect, useState } from "react";
import axios from "axios";
import CompanyList from "./components/CompanyList";
import CompanyForm from "./components/CompanyForm";
import FilterBar from "./components/FilterBar";

const companies_URL = "http://localhost:3001/companies";

function App() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [error, setError] = useState(null);

  // FETCH COMPANIES (once when component is (re)loaded)
  useEffect(() => {
    axios.get(companies_URL)
      .then(response => {
        setCompanies(response.data);
        setFilteredCompanies(response.data);
      })
      .catch(err => setError("Failed to fetch companies."));
  }, []);

  // ADD COMPANY
  const addCompany = (newCompany) => {
    axios.post(companies_URL, newCompany)
      .then(response => {
        setCompanies([...companies, response.data]);
        setFilteredCompanies([...companies, response.data]);
      })
      .catch(() => setError("Failed to add company."));
  };

  // DELETE COMPANY
  const deleteCompany = (id) => {
    axios.delete(`${companies_URL}/${id}`)
      .then(() => {
        const updatedCompanies = companies.filter(c => c.id !== id);
        setCompanies(updatedCompanies);
        setFilteredCompanies(updatedCompanies);
      })
      .catch(() => setError("Failed to delete company."));
  };

  // FILTER COMPANIES
  const filterCompanies = (criteria) => {
    const filtered = companies.filter(company =>
      company.name.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Hitlist</h1>
      {error && <p className="text-red-500">{error}</p>}
      <CompanyForm addCompany={addCompany} />
      <FilterBar filterCompanies={filterCompanies} />
      <CompanyList companies={filteredCompanies} deleteCompany={deleteCompany} />
    </div>
  );
}

export default App;
