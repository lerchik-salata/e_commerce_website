import { Address } from "../../../../../types/user.interface";

interface UserAddressProps {
  address: Address;
}

const UserAddress = ({ address } : UserAddressProps) => (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Address</h3>
      <p>{address.street}, {address.suite}</p>
      <p>{address.city}, {address.zipcode}</p>
    </div>
);

export default UserAddress;
