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
import { useAddBookMutation } from "@/redux/api/baseApi"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"
import type { IBook } from "types"

export function AddBookDialog() {

    const form = useForm();
    const [isOpen, setIsOpen] = useState(false);

    const [addBook, { isLoading }] = useAddBookMutation();

    const handleAddBook: SubmitHandler<FieldValues> = (data) => {
        // console.log(data);
        // dispatch(addBook(data as IBook));
        addBook(data as IBook)
            .unwrap()
            .then((response) => {
                if (response?.success) {
                    // console.log('Book added successfully:', response);
                    toast.success('Book added successfully!');
                    form.reset();
                }
                // dispatch(addBook(data as IBook));
            })
            .catch((error) => {
                toast.error("Failed to add book", {
                    description: error?.data?.error?.message
                })
            });
        setIsOpen(false);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }



    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#a67c52] text-white hover:bg-[#8f6b4a] transition-colors duration-200">
                    <Plus />  Add Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-[#6b4f1d]">Add New Book</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleAddBook)} >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-3">
                                            <Label htmlFor="copies">Title</Label>
                                            <Input {...field} value={field.value || ""} required />
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
                                            <Input {...field} value={field.value || ""} required />
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
                                    <Select onValueChange={field.onChange} defaultValue={field.value} required>
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
                                            <Input {...field} value={field.value || ""} required />
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
                                            <Input {...field} value={field.value || ""} required type="number" />
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
                            <Button type="submit" className="bg-[#a67c52] text-white hover:bg-[#8f6b4a] transition-colors duration-200">Submit</Button>
                        </DialogFooter>

                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}
