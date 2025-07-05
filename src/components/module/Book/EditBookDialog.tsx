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
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useEditBookMutation } from "@/redux/api/baseApi"
import { Pencil } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"
import type { IBook } from "types"

export function EditBookDialog({ book }: { book: IBook }) {
    const [isOpen, setIsOpen] = useState(false);

    const [editBook] = useEditBookMutation();

    const form = useForm({
        defaultValues: {
            title: book.title,
            author: book.author,
            genre: book.genre,
            isbn: book.isbn,
            copies: book.copies,
            description: book.description,
        }
    });

    // Update form values when book changes
    useEffect(() => {
        form.reset({
            title: book.title,
            author: book.author,
            genre: book.genre,
            isbn: book.isbn,
            copies: book.copies,
            description: book.description,
        });
    }, [book, form]);

    const handleEditBook: SubmitHandler<FieldValues> = (bookData) => {
        // console.log(bookData);
        // dispatch(editBook(data as IBook));
        editBook({ bookId: book?._id, bookData })
            .unwrap()
            .then((response) => {
                if (response?.success) {
                    // console.log('Book edited successfully:', response);
                    toast.success('Book edited successfully!');
                }
            })
            .catch((error) => {
                toast.error("Failed to edit book", {
                    description: error?.data?.error?.message
                })
            });
        setIsOpen(false);
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button size={"sm"} className="bg-sky-500 text-white hover:bg-sky-700 transition-colors duration-200">
                    <Pencil /> Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-[#6b4f1d]">Edit Book</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleEditBook)} >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-3">
                                            <Label htmlFor="copies">Title</Label>
                                            <Input {...field} value={field.value || ""} />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-3">
                                            <Label htmlFor="copies">Author</Label>
                                            <Input {...field} value={field.value || ""} />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem className="w-full mt-2">
                                    <FormLabel>Genre</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className="w-full">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a genre" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="FICTION">Fiction</SelectItem>
                                            <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                                            <SelectItem value="SCIENCE">Science</SelectItem>
                                            <SelectItem value="FANTASY">Fantasy</SelectItem>
                                            <SelectItem value="HISTORY">History</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-3">
                                            <Label htmlFor="copies">ISBN</Label>
                                            <Input {...field} value={field.value || ""} />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="copies"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-3">
                                            <Label htmlFor="copies">Copies</Label>
                                            <Input {...field} value={field.value || ""} />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-3">
                                            <Label htmlFor="copies">Description</Label>
                                            <Textarea {...field} value={field.value || ""} />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter className="mt-4">
                            {/* <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose> */}
                            <Button type="submit" className="bg-[#a67c52] text-white hover:bg-[#8f6b4a] transition-colors duration-200">Save changes</Button>
                        </DialogFooter>

                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}
