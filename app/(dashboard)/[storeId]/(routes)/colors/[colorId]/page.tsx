import { prismadb } from "@/lib/prismadb";
import ColorForm from "./components/size-form";
import { Color } from "@prisma/client";
const { ObjectId } = require('mongodb');


const ColorPage = async ({ params }: { params: { colorId: string } }) => {

    let color: Color | null = null;
    if (params.colorId && ObjectId.isValid(params.colorId)) {
        color = await prismadb.color.findUnique({
            where: {
                id: params.colorId
            }
        });
    }

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <ColorForm initialData={color} />
            </div>
        </div>
    );
}

export default ColorPage;