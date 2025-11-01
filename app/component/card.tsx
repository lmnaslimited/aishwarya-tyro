"use client";

import React from "react";

export default function Card() {
  // Function to handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop page reload

    // Collect all form values
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Submitting Form Data:", data);

    try {
      // Send the data to your API route (POST request)
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check response
      if (!res.ok) {
        const errorData = await res.json();
        alert(`❌ Error: ${errorData.error}`);
        return;
      }

      // Parse success response
      const result = await res.json();
      console.log("Server Response:", result);
      alert("✅ Lead successfully created!");
      
      // Optional: reset form after success
      event.currentTarget.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Something went wrong while submitting the form.");
    }


  }

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleSubmit} className="space-y-6">
        


        {/* client Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
             Name
          </label>
          <input
            type="text"
            id="client_name"
            name="client_name"
            placeholder="Enter client name"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>

        
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@company.com"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        {/* Lead ID Field */}
        <div>
          <label
            htmlFor="id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ticket ID 
          </label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Enter the ticket id "
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
        {/* Status */}
        <div>
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="">Select status</option>
            <option value="Lead">inprogress</option>
            <option value="Open">Open</option>
            <option value="Open">closed</option>

          </select>
        </div>


        {/* Submit */}
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 
            px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 
            dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}


