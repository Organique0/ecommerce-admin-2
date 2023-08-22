import { prismadb } from "@/lib/prismadb";
import SizeForm from "./components/size-form";
import { Size } from "@prisma/client";
const { ObjectId } = require('mongodb');

const SizePage = async ({ params }: { params: { sizeId: string } }) => {

    var size: Size | null = null;
    if (params.sizeId && ObjectId.isValid(params.sizeId)) {
        size = await prismadb.size.findUnique({
            where: {
                id: params.sizeId
            }
        });
    }



    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <SizeForm initialData={size} />
            </div>
        </div>
    );
}

export default SizePage;