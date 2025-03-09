"use server";

export async function admitStudent(formData: FormData) {
    const studentData = {
        name: formData.get("name"),
        mobile: formData.get("mobile"),
        fathersName: formData.get("fathersName"),
        mothersName: formData.get("mothersName"),
        class: formData.get("class"),
        email: formData.get("email"),
    };

    try {
        const response = await fetch("http://localhost:3000/admit-student", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(studentData),
        });

        const data = await response.json();
        return data.message; // Return success message
    } catch (error) {
        console.error("Error:", error);
        return "Failed to admit student.";
    }
}
