export default async function StudentDetail(
    { params }: { params: Promise<{ studentId: string }> }
) {
    const studentId = (await params).studentId;
    return (
        <h1>Student details - {studentId}</h1>
    )
}