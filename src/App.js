import React, { useState } from "react";

const customerData = [
  {
    name: "John Doe",
    address: "123 Main St",
    city: "New York City",
    postcode: "10001",
    country: "USA",
  },
  {
    name: "Jane Smith",
    address: "456 Central Ave",
    city: "New York City",
    postcode: "10002",
    country: "USA",
  },
  {
    name: "Alice Johnson",
    address: "789 Park Lane",
    city: "Albon",
    postcode: "12001",
    country: "USA",
  },
  {
    name: "Bob Brown",
    address: "101 High Street",
    city: "Omiario",
    postcode: "K8N 5W6",
    country: "Canada",
  },
  {
    name: "Charlie Davis",
    address: "202 Elm St",
    city: "Springfield",
    postcode: "90210",
    country: "USA",
  },
  {
    name: "David Evans",
    address: "303 Pine Rd",
    city: "Rivertown",
    postcode: "11223",
    country: "USA",
  },
  {
    name: "Eva Fernandez",
    address: "404 Oak Dr",
    city: "Lakeside",
    postcode: "22334",
    country: "Canada",
  },
  {
    name: "Frank Green",
    address: "505 Maple Ave",
    city: "Hilltop",
    postcode: "33445",
    country: "USA",
  },
  {
    name: "Grace Hall",
    address: "606 Birch Blvd",
    city: "Sunnydale",
    postcode: "44556",
    country: "USA",
  },
  {
    name: "Henry Isaac",
    address: "707 Cedar Ct",
    city: "Shadowbrook",
    postcode: "55667",
    country: "Canada",
  },
];

// Extract unique countries and cities
const extractTreeData = (data) => {
  const tree = {};
  data.forEach((customer) => {
    if (!tree[customer.country]) {
      tree[customer.country] = [];
    }
    if (!tree[customer.country].includes(customer.city)) {
      tree[customer.country].push(customer.city);
    }
  });
  return tree;
};

const treeData = extractTreeData(customerData);

function TreeStructure({ onSelect }) {
  const [expandedCountries, setExpandedCountries] = useState([]);

  const toggleExpand = (country) => {
    if (expandedCountries.includes(country)) {
      setExpandedCountries((prev) => prev.filter((c) => c !== country));
    } else {
      setExpandedCountries((prev) => [...prev, country]);
    }
  };

  const handleClick = (node) => {
    if (treeData[node]) {
      // If it exists as a key in treeData, it's a country
      onSelect(node);
    } else {
      // Otherwise, it's a city
      onSelect(node);
    }
  };

  const renderTree = (tree) => (
    <ul className="space-y-2 pl-4">
      {Object.keys(tree).map((country) => (
        <li key={country} className="p-2 hover:bg-gray-100">
          <div className="flex items-center">
            <button className="mr-2" onClick={() => toggleExpand(country)}>
              {expandedCountries.includes(country) ? "-" : "+"}
            </button>
            <span
              className="cursor-pointer"
              onClick={() => handleClick(country)}
            >
              {country}
            </span>
          </div>
          {expandedCountries.includes(country) && (
            <ul className="space-y-2 pl-4 mt-2">
              {tree[country].map((city) => (
                <li
                  key={city}
                  className="cursor-pointer p-2 hover:bg-gray-100"
                  onClick={() => handleClick(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return <div>{renderTree(treeData)}</div>;
}

function CustomerDetails({ selected }) {
  // Placeholder data. You can fetch this from an API or a database.

  const data = customerData.filter(
    (customer) => customer.country === selected || customer.city === selected
  );

  return (
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Address</th>
          <th className="border border-gray-300 p-2">City</th>
          <th className="border border-gray-300 p-2">Postcode</th>
          <th className="border border-gray-300 p-2">Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((customer, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">{customer.name}</td>
            <td className="border border-gray-300 p-2">{customer.address}</td>
            <td className="border border-gray-300 p-2">{customer.city}</td>
            <td className="border border-gray-300 p-2">{customer.postcode}</td>
            <td className="border border-gray-300 p-2">{customer.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Profile({ setSubmittedData }) {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    setSubmittedData({
      UserID: userID,
      Password: password,
    });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="userID"
            className="block text-sm font-medium text-gray-700"
          >
            UserID
          </label>
          <input
            type="text"
            id="userID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function ProfileData({ submittedData }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Submitted Data:</h3>
      <pre className="bg-gray-100 p-4 rounded-md">
        {JSON.stringify(submittedData, null, 2)}
      </pre>
    </div>
  );
}

export default function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/4 bg-gray-200 h-full border-r">
        <ul className="space-y-2 p-4">
          {["Home", "Profile", "Messages", "Settings"].map((tab) => (
            <li
              key={tab}
              className="cursor-pointer p-2 hover:bg-gray-300 block text-center"
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Middle Section */}
      <div className="w-1/4 bg-gray-100 h-full border-r p-4 overflow-y-auto">
        {selectedTab === "Home" && (
          <TreeStructure onSelect={setSelectedLocation} />
        )}
        {selectedTab === "Profile" && (
          <Profile setSubmittedData={setSubmittedData} />
        )}
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-50 p-4 h-full overflow-y-auto">
        {selectedTab === "Home" && (
          <CustomerDetails selected={selectedLocation} />
        )}
        {selectedTab === "Profile" && (
          <ProfileData submittedData={submittedData} />
        )}
      </div>
    </div>
  );
}
