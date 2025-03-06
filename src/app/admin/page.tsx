"use client"

import { useState } from "react";

export default function AdminDashboard() {
    const [student, setStudent] = useState({
        name: '',
        mobile: '',
        fathersName: '',
        mothersName: '',
        class: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function handleSubmit(formData: any) {
        const email = formData.get('email');
        const name = formData.get('name');
        console.log(email);
        console.log(name);
    };

    return (
        <div className="m-10">  <h1 className="text-2xl font-bold text-red-500 mb-4">Admin Dashboard</h1>
            <form action={handleSubmit} className="space-y-4">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    value={student.name}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm"
                />
                <label className="text-sm font-medium text-gray-700">Mobile</label>
                <input
                    type="text"
                    name="mobile"
                    value={student.mobile}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm"
                />
                <label className="text-sm font-medium text-gray-700">Father's Name</label>
                <input
                    type="text"
                    name="fathersName"
                    value={student.fathersName}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm"
                />
                <label className="text-sm font-medium text-gray-700">Mother's Name</label>
                <input
                    type="text"
                    name="mothersName"
                    value={student.mothersName}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm"
                />
                <label className="text-sm font-medium text-gray-700">Class</label>
                <input
                    type="text"
                    name="class"
                    value={student.class}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm"
                />
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded-md shadow-sm"
                />
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    Admit Student
                </button>
            </form>
        </div>
    );
}
