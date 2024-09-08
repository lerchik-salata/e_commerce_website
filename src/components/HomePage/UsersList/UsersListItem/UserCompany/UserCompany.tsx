import { Company } from "../../../../../types/user.interface";

interface UserCompanyProps {
  company: Company;
}

const UserCompany = ({ company } : UserCompanyProps) => (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Company</h3>
      <p className="text-gray-700">{company.name}</p>
      <p className="text-gray-500 italic">{company.catchPhrase}</p>
    </div>
);

export default UserCompany;
