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
import { addBook } from "@/redux/features/book/bookSlice"
import { useAppDispatch } from "@/redux/hook"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"

export function AddBookDialog() {

    const dispatch = useAppDispatch();

    const handleAddBook = (data) => {
        console.log(data);
        dispatch(addBook(data));
    }

    const form = useForm();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#a67c52] text-white hover:bg-[#8f6b4a] transition-colors duration-200">
                    <Plus />  Add Book</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
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
                                            <SelectItem value="Fiction">Fiction</SelectItem>
                                            <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
                                            <SelectItem value="Science Fiction">Science Fiction</SelectItem>
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
