
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"

export default function WritersBlogListComponent() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Writers Collaborations</h2>
        {/* <Link href="/edit-blog">
          <Button variant="default">Add New</Button>
        </Link> */}
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Writer</TableHead>
              <TableHead>Blog Title</TableHead>
              <TableHead>Date Created</TableHead>
              <TableHead>Date Published</TableHead>
              <TableHead>Amount Accumulated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Writer 01</TableCell>
              <TableCell className="font-medium">Title Resource 01</TableCell>
              <TableCell>06/13/24</TableCell>
              <TableCell>06/15/24</TableCell>
              <TableCell>0.05 eth</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Link href="/blog">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    Publish
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Writer 02</TableCell>
              <TableCell className="font-medium">Title Resource 02</TableCell>
              <TableCell>06/13/24</TableCell>
              <TableCell>06/15/24</TableCell>
              <TableCell>0.02 eth</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Link href="/blog">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    Publish
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Writer 03</TableCell>
              <TableCell className="font-medium">Title Resource 03</TableCell>
              <TableCell>06/13/24</TableCell>
              <TableCell>06/15/24</TableCell>
              <TableCell>0.03 eth</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Publish
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Writer 01</TableCell>
              <TableCell className="font-medium">Title Resource 04</TableCell>
              <TableCell>06/13/24</TableCell>
              <TableCell>06/15/24</TableCell>
              <TableCell>0.01 eth</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Publish
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}