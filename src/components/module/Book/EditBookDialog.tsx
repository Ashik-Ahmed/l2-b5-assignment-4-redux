import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
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
import { useAppDispatch } from "@/redux/hook"
import { Pencil } from "lucide-react"
import { useEffect } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import type { IBook } from "types"

export function EditBookDialog({ book }: { book: IBook }) {
    const dispatch = useAppDispatch();

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

    const handleEditBook: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
        // dispatch(editBook(data as IBook));
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#a67c52] text-white hover:bg-[#8f6b4a] transition-colors duration-200">
                    <Pencil /> Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Book</DialogTitle>
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
                        {/* <FormField
                            control={form.control}
                            name="genre"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-3">
                                            <Label htmlFor="copies">Genre</Label>
                                            <Input {...field} value={field.value || ""} />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        /> */}
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
                                            <SelectItem value="SCIENCE">Science Fiction</SelectItem>
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
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>

                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}
