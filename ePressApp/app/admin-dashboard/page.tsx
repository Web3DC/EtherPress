import EditorBlogListComponent from "@/components/EditorBlogList";
import EditorTransactionsComponent from "@/components/EditorTransactions";
import HeaderComponent from "@/components/Header";
import WritersBlogListComponent from "@/components/WritersBlogList";
import WritersTransactionsComponent from "@/components/WritersTransactions";

export default function AdminDashboard() {
    return (
      <div>
        <HeaderComponent />
        <WritersBlogListComponent />
        <WritersTransactionsComponent />
      </div>
    );
  }