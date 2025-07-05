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

    if (isLoading) return <div className='text-4xl text-[#6b4f1d] w-full mt-10 flex justify-center items-center'>Loading Summary...</div>;
    if (isError) return <div>Error</div>;

    return (
        <div>
            <Table className="my-8 md:w-10/12 mx-auto border">
                <TableCaption >Summary of Borrowed Books</TableCaption>
                <TableHeader className='bg-[#a67c52]'>
                    <TableRow>
                        <TableHead className="w-[100px] font-bold">Book Title</TableHead>
                        <TableHead className="text-center font-bold">ISBN</TableHead>
                        <TableHead className="text-center font-bold">Total Quantity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.data.map((bookData: BorrowSummaryItem) => (
                        <TableRow key={bookData.book.isbn}>
                            <TableCell className="font-medium">{bookData.book.title}</TableCell>
                            <TableCell className="text-center">{bookData.book.isbn}</TableCell>
                            <TableCell className="text-center">{bookData.totalQuantity}</TableCell>
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