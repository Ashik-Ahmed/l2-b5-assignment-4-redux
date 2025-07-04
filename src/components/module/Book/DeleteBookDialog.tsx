import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useDeleteBookMutation } from "@/redux/api/baseApi"
import { Trash } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import type { IBook } from "types"

export function DeleteBookDialog({ book }: { book: IBook }) {

    const [isOpen, setIsOpen] = useState(false);

    const [deleteBook] = useDeleteBookMutation();

    const handleDeleteBook = () => {
        deleteBook({ bookId: book._id })
            .unwrap()
            .then((response) => {
                if (response?.success) {
                    // console.log('Book deleted successfully:', response);
                    toast.success('Book deleted successfully!');
                }
            })
            .catch((error) => {
                // console.log(error);
                toast.error("Failed to delete book", {
                    description: error?.data?.error?.message
                })
            });

        setIsOpen(false);
    }


    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-red-500 text-white hover:bg-red-700 transition-colors duration-200">
                    <Trash />  Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Book</DialogTitle>
                    <DialogDescription>
                        Sure to delete this book?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-4">
                    <Button onClick={() => handleDeleteBook()} className="bg-red-500 text-white hover:bg-red-700 transition-colors duration-200">
                        <Trash /> Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
