import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetBorrowSummaryQuery } from '@/redux/api/baseApi';

type BorrowSummaryItem = {
    book: {
        isbn: string;
        title: string;
    };
    totalQuantity: number;
};

const Borrow = () => {

    const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);
    console.log(data, isLoading, isError);

    return (
        <div>
            <Table className="my-8 md:w-10/12 mx-auto border">
                <TableCaption >Summary of Borrowed Books</TableCaption>
                <TableHeader className='bg-[#a67c52]'>
                    <TableRow>
                        <TableHead className="w-[100px]">Book Title</TableHead>
                        <TableHead className="text-center">ISBN</TableHead>
                        <TableHead className="text-right">Total Quantity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.data.map((bookData: BorrowSummaryItem) => (
                        <TableRow key={bookData.book.isbn}>
                            <TableCell className="font-medium">{bookData.book.title}</TableCell>
                            <TableCell className="text-center">{bookData.book.isbn}</TableCell>
                            <TableCell className="text-right">{bookData.totalQuantity}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                {/* <TableFooter>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter> */}
            </Table>
        </div>
    );
};

export default Borrow;