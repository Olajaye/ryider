"use client";

import { useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    gender: "Male",
    email: "johndoe@gmail.com",
    accountType: "Publisher",
    phone: "(202) 555 - 0119",
    country: "Nigeria",
    state: "Lagos State",
    address: "No 5, Iganmode Primary School, Ikeja, Lagos State",
    whatsapp: "whatsapp.com//meandshopper",
    telegram: "telegram.com//meandshopper",
  });

  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("basic-info");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsOpen(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
    // Here you would typically update the profile in your backend
  };

  return (
    <>
      <div className="pb-20">
        <h1 className="text-3xl font-bold mb-4">Profile Settings</h1>

        <div className="min-h-screen bg-gray-50">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-64 min-h-screen border-r">
              <div className="p-3">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("basic-info")}
                    className={`w-full text-left px-4 py-2  transition-colors ${
                      activeTab === "basic-info"
                        ? "border-s-4 border-green text-black"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Basic Information
                  </button>
                  <button
                    onClick={() => setActiveTab("withdrawal")}
                    className={`w-full text-left px-4 py-2  transition-colors ${
                      activeTab === "withdrawal"
                        ? "border-s-4 border-green text-black"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    Withdrawal
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 px-2">
              {activeTab === "basic-info" && (
                <>
                  <div className="bg-white rounded-lg shadow-lg">
                    <div className="bg-white rounded-lg shadow-md">
                      <div className="p-6 border-b">
                        <h2 className="text-xl font-semibold">
                          Basic Information
                        </h2>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-8">
                          <div className="flex items-center gap-4">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-semibold text-white">
                              {profile.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <h2 className="text-xl font-semibold">
                                {profile.name}
                              </h2>
                              <p className="text-gray-500">{profile.email}</p>
                            </div>
                          </div>

                          <button
                            onClick={() => setIsOpen(true)}
                            className="px-4 py-2 border rounded-md hover:bg-gray-100"
                          >
                            Edit details
                          </button>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                          <div className="flex space-x-48 items-center">
                            <label className="text-sm text-gray-500">
                              Gender
                            </label>
                            <p className="mt-1">{profile.gender}</p>
                          </div>
                          <div className="flex space-x-48 items-center">
                            <label className="text-sm text-gray-500">
                              Account Type
                            </label>
                            <p className="mt-1">{profile.accountType}</p>
                          </div>
                          <div className="flex space-x-48 items-center">
                            <label className="text-sm text-gray-500">
                              Phone Number
                            </label>
                            <p className="mt-1">{profile.phone}</p>
                          </div>
                          <div className="flex space-x-48 items-center">
                            <label className="text-sm text-gray-500">
                              Country
                            </label>
                            <p className="mt-1">{profile.country}</p>
                          </div>
                          <div className="flex space-x-48 items-center">
                            <label className="text-sm text-gray-500">
                              State
                            </label>
                            <p className="mt-1">{profile.state}</p>
                          </div>
                          <div className="flex space-x-48 items-center">
                            <label className="text-sm text-gray-500">
                              Address
                            </label>
                            <p className="mt-1">{profile.address}</p>
                          </div>
                          <div className="flex space-x-48 items-center">
                            <label className="text-sm text-gray-500">
                              WhatsApp Link
                            </label>
                            <p className="mt-1">{profile.whatsapp}</p>
                          </div>
                          <div className="flex space-x-48 items-center">
                            <label className="text-sm text-gray-500">
                              Telegram Link
                            </label>
                            <p className="mt-1">{profile.telegram}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-lg mt-8 flex justify-between pb-20">
                    <div>
                      <h3 className="text-lg font-semibold">Password Change</h3>
                      <p className="text-sm text-gray-500 mt-2">
                        A password must contain a minimum of 12 characters, one
                        lowercase letter and one number
                      </p>
                    </div>
                   
                    <button className="px-4 py-2 border rounded-md hover:bg-gray-100">
                      Change Password
                    </button>
                  </div>
                </>
              )}

              {activeTab === "withdrawal" && (
                <div>
                  <h1 className="text-2xl font-bold mb-8">Withdrawal</h1>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <p>Withdrawal settings content will go here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Edit Profile</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    value={profile.gender}
                    onChange={(e) =>
                      setProfile({ ...profile, gender: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Country
                  </label>
                  <input
                    type="text"
                    value={profile.country}
                    onChange={(e) =>
                      setProfile({ ...profile, country: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    value={profile.state}
                    onChange={(e) =>
                      setProfile({ ...profile, state: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="col-span-2 space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    type="text"
                    value={profile.address}
                    onChange={(e) =>
                      setProfile({ ...profile, address: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    WhatsApp Link
                  </label>
                  <input
                    type="text"
                    value={profile.whatsapp}
                    onChange={(e) =>
                      setProfile({ ...profile, whatsapp: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Telegram Link
                  </label>
                  <input
                    type="text"
                    value={profile.telegram}
                    onChange={(e) =>
                      setProfile({ ...profile, telegram: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

{
  /* Modal for editing details */
}
// {isOpen && (
//   <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//     <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//       <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               id="name"
//               value={profile.name}
//               onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label htmlFor="gender" className="block text-gray-700">Gender</label>
//             <select
//               id="gender"
//               value={profile.gender}
//               onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             >
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={profile.email}
//               onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label htmlFor="phone" className="block text-gray-700">Phone</label>
//             <input
//               type="text"
//               id="phone"
//               value={profile.phone}
//               onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label htmlFor="country" className="block text-gray-700">Country</label>
//             <input
//               type="text"
//               id="country"
//               value={profile.country}
//               onChange={(e) => setProfile({ ...profile, country: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label htmlFor="state" className="block text-gray-700">State</label>
//             <input
//               type="text"
//               id="state"
//               value={profile.state}
//               onChange={(e) => setProfile({ ...profile, state: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label htmlFor="address" className="block text-gray-700">Address</label>
//             <input
//               type="text"
//               id="address"
//               value={profile.address}
//               onChange={(e) => setProfile({ ...profile, address: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label htmlFor="whatsapp" className="block text-gray-700">WhatsApp Link</label>
//             <input
//               type="text"
//               id="whatsapp"
//               value={profile.whatsapp}
//               onChange={(e) => setProfile({ ...profile, whatsapp: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//           <div>
//             <label htmlFor="telegram" className="block text-gray-700">Telegram Link</label>
//             <input
//               type="text"
//               id="telegram"
//               value={profile.telegram}
//               onChange={(e) => setProfile({ ...profile, telegram: e.target.value })}
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//           </div>
//         </div>

//         <div className="flex justify-end gap-4 mt-6">
//           <button
//             type="button"
//             onClick={() => setIsOpen(false)}
//             className="px-4 py-2 border rounded-lg bg-gray-500 text-white"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//           >
//             Save changes
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// )}
