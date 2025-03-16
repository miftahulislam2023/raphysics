import { auth, signIn, signOut } from "@/auth"
import Image from 'next/image'

export default async function Profile() {
    const session = await auth();
    const user = session?.user;
    console.log(user)
    const src = user?.image
    return user ? (<>
        <h1>Welcome {user.name}</h1>
        {user?.image && <Image src={user.image} alt="" width={100} height={100} />}
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <button type="submit">Signout</button>
        </form>
    </>
    ) :
        (<>
            <h1>Click below to sign in.</h1>
            <form action={async () => {
                "use server"
                await signIn("google")
            }}
            >
                <button type="submit">Signin with Google</button>
            </form>
        </>
        )
} 