"use client";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable";

interface OrderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OrderClientProps> = ({ data }) => {

    return (
        <>
            <Heading title={`Orders (${data.length})`} description="Manage orders" />
            <Separator />
            <DataTable columns={columns} data={data} searchKey="label" />
        </>
    )
}