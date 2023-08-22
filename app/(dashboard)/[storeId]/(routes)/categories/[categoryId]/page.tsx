import { prismadb } from "@/lib/prismadb";
import CategoryForm from "./components/category-form";
import { Category } from "@prisma/client";
const { ObjectId } = require('mongodb');

const CategoryPage = async ({ params }: { params: { categoryId: string, storeId: string } }) => {
    let category: Category | null = null;

    if (params.categoryId && ObjectId.isValid(params.categoryId)) {
        category = await prismadb.category.findUnique({
            where: {
                id: params.categoryId
            }
        });
    }
    const billboards = await prismadb.billboard.findMany({
        where: {
            storeId: params.storeId
        }
    })

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <CategoryForm initialData={category} billboards={billboards} />
            </div>
        </div>
    );
}

export default CategoryPage;