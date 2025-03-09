"use client";

import { useState } from "react";
import { admitStudent } from "./actions";

export default function AdminDashboard() {
    const [message, setMessage] = useState("");

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
            {message && <p className="text-green-600 mb-3">{message}</p>}

            <form
                action={async (formData) => setMessage(await admitStudent(formData))}
                className="space-y-4"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" required className="mt-1 w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Mobile</label>
                    <input type="text" name="mobile" required className="mt-1 w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Father's Name</label>
                    <input type="text" name="fathersName" required className="mt-1 w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
                    <input type="text" name="mothersName" required className="mt-1 w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Class</label>
                    <input type="text" name="class" required className="mt-1 w-full p-2 border rounded-md" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" required className="mt-1 w-full p-2 border rounded-md" />
                </div>

                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                    Admit Student
                </button>
            </form>
        </div>
    );
}
