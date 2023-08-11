import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import StoreSwithcer from "./StoreSwitcher";
import { redirect } from "next/navigation";
import { prismadb } from "@/lib/prismadb";
import { ModeToggle } from "./ThemeToggle";

const Navbar = async () => {
    const { userId } = auth();
    if (!userId) redirect("/sign-in");

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        }
    })
    return (
        <div className="border-b">
            <div className="flex items-center px-4 h-16">
                <StoreSwithcer items={stores} />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;