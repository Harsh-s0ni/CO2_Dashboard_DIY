import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  User,
  Lock,
  Calendar,
  MapPin,
  CheckCircle,
  XCircle,
  Settings,
} from "lucide-react";

function UserAccess() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [expirationDate, setExpirationDate] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState(""); // Stores selected role
  const today = new Date().toISOString().split("T")[0];
  const [selectedLocations, setSelectedLocations] = useState([
    "Sanad",
    "Solan",
  ]); // Pre-selected values
  const availableLocations = [
    "Sanad",
    "Solan",
    "Bristol",
    "Italy",
    "BIA",
    "Australia",
    "Sweden",
    "Chandler's Ford",
    "Zurich",
    "UAE",
    "PIA",
    "MIA",
    "RO Gurugram",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userId,
      password,
      isActive,
      expirationDate,
      role,
      location,
    };
    console.log("User Access Data:", userData);
    // TODO: Integrate API call here
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white flex flex-col flex-grow">
      {/* Admin Form Section */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-5 space-y-2">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Control
              </h1>
              <p className="mt-2 text-gray-600">Manage user access rights</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* User ID */}
                <div className="relative">
                  <input
                    type="text"
                    autoComplete="off"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    placeholder="User ID"
                    required
                  />
                  <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Password */}
                <div className="relative">
                  <input
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200"
                    placeholder="Password"
                    required
                  />
                  <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Expiration Date */}
                <div className="relative">
                  <DatePicker
                    selected={expirationDate}
                    onChange={(date) => setExpirationDate(date)}
                    minDate={today}
                    placeholderText="Expiration Date"
                    dateFormat="dd-MMM-yyyy"
                    className="peer w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200 appearance-none"
                  />
                  <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Role Selection */}
                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-2"></label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200 text-gray-500"
                    required>
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="ADMIN">Admin</option>
                    <option value="USER">User</option>
                  </select>
                  <Settings className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Location */}
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12 transition-all duration-200 text-gray-500 "
                    required>
                    <option value="" disabled>
                      Select a location
                    </option>
                    <option value="Sanad">Sanad</option>
                    <option value="Solan">Solan</option>
                    <option value="Bristol">Bristol</option>
                    <option value="Italy">Italy</option>
                    <option value="BIA">BIA</option>
                    <option value="Australia">Australia</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Chandler's Ford">Chandler's Ford</option>
                    <option value="Zurich">Zurich</option>
                    <option value="UAE">UAE</option>
                    <option value="PIA">PIA</option>
                    <option value="MIA">MIA</option>
                    <option value="RO Gurugram">RO Gurugram</option>
                  </select>
                  <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Is Active (Boolean) */}
                <div className="mb-4 flex">
                  <label className="block text-gray-700 font-medium mr-4">
                    Is Active:
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2 text-gray-600">
                      <input
                        type="radio"
                        value="yes"
                        checked={isActive === true}
                        onChange={() => setIsActive(true)}
                        className="form-radio text-indigo-600"
                      />
                      <span>Yes</span>
                    </label>

                    <label className="flex items-center left-10 space-x-3 text-gray-600">
                      <input
                        type="radio"
                        value="no"
                        checked={isActive === false}
                        onChange={() => setIsActive(false)}
                        className="form-radio text-indigo-600 "
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-4 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-[#820C59] hover:bg-[#722156] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200">
                  Save User Access
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccess;
