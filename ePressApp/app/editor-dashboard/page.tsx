import EditorBlogListComponent from "@/components/EditorBlogList";
import EditorTransactionsComponent from "@/components/EditorTransactions";
import HeaderComponent from "@/components/Header";

export default function EditorDashboard() {
    return (
      <div>
        <HeaderComponent />
        <EditorBlogListComponent />
        <EditorTransactionsComponent />
      </div>
    );
  }