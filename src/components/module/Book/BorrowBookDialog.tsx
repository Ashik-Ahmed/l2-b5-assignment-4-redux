import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useBorrowBookMutation } from "@/redux/api/baseApi"
import { ChevronDownIcon } from "lucide-react"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

export function BorrowBookDialog({ bookId }: { bookId: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [date, setDate] = useState(null);

    const form = useForm();

    const [borrowBook, { data, isLoading, isError }] = useBorrowBookMutation();

    const handleBorrowBook: SubmitHandler<FieldValues> = (data) => {
        const borrowData = { quantity: data.quantity, book: bookId, dueDate: date };
        // console.log(borrowData);

        borrowBook(borrowData)
            .unwrap()
            .then((response) => {
                console.log(response);
                if (response?.success) {
                    // console.log('Book borrowed successfully:', response);
                    toast.success('Book borrowed successfully!');
                    form.reset();
                }
            })
            .catch((error) => {
                toast.error(`Failed! ${error?.data?.message}`);
            });

        setIsOpen(false);
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button size={"sm"} className="bg-[#a67c52] text-white hover:bg-[#6b4f1d] transition-colors duration-200">
                    Borrow</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-[#6b4f1d]">Borrow Book</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleBorrowBook)} >
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <div className="grid w-full max-w-sm items-center gap-3">
                                            <Label htmlFor="copies">Quantity</Label>
                                            <Input {...field} value={field.value || ""} required type="number" />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-3">
                            <Label htmlFor="dueDate" className="px-1">
                                Due Date
                            </Label>
                            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        id="dueDate"
                                        className="w-48 justify-between font-normal"
                                    >
                                        {date ? date.toLocaleDateString() : "Select due date"}
                                        <ChevronDownIcon />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        required
                                        mode="single"
                                        selected={date || undefined}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            if (date) {
                                                setDate(date)
                                                setIsCalendarOpen(false)
                                            }
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <DialogFooter className="mt-4">
                            <Button type="submit" className="bg-[#a67c52] text-white hover:bg-[#8f6b4a] transition-colors duration-200">Borrow</Button>
                        </DialogFooter>

                    </form>
                </Form>
            </DialogContent>
        </Dialog >
    )
}
