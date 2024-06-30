import BlogComponent from "@/components/Blog";
import EditBlogComponent from "@/components/EditBlog";
import HeaderComponent from "@/components/Header";
import ListPressAllComponent from "@/components/ListPressAll";
import { List } from "lucide-react";
import { LATEST_PUBLIC_MEMBER_RESOURCES } from "@/constants/latestMemberPublicResourcesAll";

export default function Resources() {
    return (
      <div>
        <HeaderComponent />
        <ListPressAllComponent {...LATEST_PUBLIC_MEMBER_RESOURCES} />
      </div>
    );
  }