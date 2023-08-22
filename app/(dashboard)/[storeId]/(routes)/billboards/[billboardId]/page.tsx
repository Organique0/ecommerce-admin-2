import { prismadb } from "@/lib/prismadb";
import BillboardForm from "./components/billboard-form";
import { Billboard } from "@prisma/client";
const { ObjectId } = require('mongodb');
const BillboardPage = async ({ params }: { params: { billboardId: string } }) => {
    let billboard: Billboard | null = null;

    if (params.billboardId && ObjectId.isValid(params.billboardId)) {
        billboard = await prismadb.billboard.findUnique({
            where: {
                id: params.billboardId
            }
        });
    }


    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardForm initialData={billboard} />
            </div>
        </div>
    );
}

export default BillboardPage;