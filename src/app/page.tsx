import { auth } from "@/auth";
import Profile from "./profile/page";

export default async function Home() {
    const session = await auth(); // Fetch session
    const user = session?.user;

    return (
        <>
            <h1>{user ? `Signed in as ${user.name}` : "Not signed in"}</h1>
        </>
    );
}
