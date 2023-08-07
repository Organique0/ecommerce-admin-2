"use client";

import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable";
import ApiList from "@/components/ui/apiList";

interface CategoriesClientProps {
    data: CategoryColumn[]
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({ data }) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Categories (${data.length})`} description="Manage categories for your store" />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add new
                </Button>
            </div>
            <Separator />
            <DataTable columns={columns} data={data} searchKey="name" />
            <Heading title="API" description="API call for categories" />
            <Separator />
            <ApiList entityIdName="categoryId" entityName="categories" />
        </>
    )
}