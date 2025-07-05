import { type ColumnDef } from "@tanstack/react-table"
import type { IBook } from "types"
import { BorrowBookDialog } from "../Book/BorrowBookDialog"
import { EditBookDialog } from "../Book/EditBookDialog"
import { DeleteBookDialog } from "../Book/DeleteBookDialog"

export const columns: ColumnDef<IBook>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "author",
        header: "Author",
    },
    {
        accessorKey: "genre",
        header: "Genre",
    },
    {
        accessorKey: "isbn",
        header: "ISBN",
    },
    {
        accessorKey: "copies",
        header: "Copies",
    },
    // {
    //     accessorKey: "description",
    //     header: "Description",
    // },
    {
        accessorKey: "available",
        header: "Availability",
        cell: ({ row }) => {
            return <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${row.original.available ? 'bg-green-300 text-green-900' : 'bg-red-300 text-red-700'}`}>
                {row.original.available ? 'Available' : 'Unavailable'}
            </span>
        }
    },
    {
        accessorKey: "actions",
        header: () => <div className="text-center">Actions</div>,
        cell: ({ row }) => {
            return <div className="flex justify-end gap-3 mt-auto">

                <BorrowBookDialog book={row.original} />
                <EditBookDialog book={row.original} />
                <DeleteBookDialog book={row.original} />
            </div>
        }
    }
]