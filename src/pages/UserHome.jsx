
import { useSelector } from "react-redux";
import { userAllUrls } from "../apis/user.apis";
import { useQuery } from "@tanstack/react-query";
import { UserHero, QuickStats, RecentActivity } from "../components/user";

export default function UserHome() {

  const { user } = useSelector((state) => state.auth);


  const { data: url = [] } = useQuery({
    queryKey: ['userUrls'],
    queryFn: userAllUrls
  })




  return (
    <div className="min-h-screen bg-slate-950 ">
      {/* Hero Section */}
      <UserHero user={user} />
      {/* Quick Stats */}
      <QuickStats urls={url} />
      <RecentActivity urls={url} />
      {/* Recent Activity */}
    </div>
  );
}
