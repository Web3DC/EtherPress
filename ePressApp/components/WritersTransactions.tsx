
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

export default function WritersTransactionsComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="lg:flex justify-between items-center my-2 space-y-2">
        <div className="flex space-x-2">
            <div className="text-xl font-bold">Total Available:</div>
            <div className="text-xl font-bold">$500 USDC</div>
        </div>
        <div className="flex space-x-2">
            <div className="text-xl font-bold">Total Requested:</div>
            <div className="text-xl font-bold">$100 USDC</div>
        </div>
        <Button variant="default">Approve Transfer</Button>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Writers Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox />
                </TableHead>
                <TableHead>Writer</TableHead>
                <TableHead>Blog Title</TableHead>
                <TableHead>Transaction Date</TableHead>
                <TableHead>Origin Wallet Address</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">Writer 01</TableCell>
                <TableCell>How to Learn React</TableCell>
                <TableCell>2023-10-01</TableCell>
                <TableCell>0x1234...abcd</TableCell>
                <TableCell>$50</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">Writer 02</TableCell>
                <TableCell>Understanding JavaScript</TableCell>
                <TableCell>2023-10-02</TableCell>
                <TableCell>0x5678...efgh</TableCell>
                <TableCell>$100</TableCell>
                <TableCell>Requested</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">Writer 03</TableCell>
                <TableCell>CSS Tips and Tricks</TableCell>
                <TableCell>2023-10-03</TableCell>
                <TableCell>0x9abc...ijkl</TableCell>
                <TableCell>$75</TableCell>
                <TableCell>Open to Request</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">Writer 04</TableCell>
                <TableCell>Advanced Node.js</TableCell>
                <TableCell>2023-10-04</TableCell>
                <TableCell>0xdef0...mnop</TableCell>
                <TableCell>$125</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">Writer 02</TableCell>
                <TableCell>Intro to TypeScript</TableCell>
                <TableCell>2023-10-05</TableCell>
                <TableCell>0xghij...qrst</TableCell>
                <TableCell>$150</TableCell>
                <TableCell>Open to Request</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}