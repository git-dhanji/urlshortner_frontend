import { getCurrentUserData } from "../apis/user.apis";
import { login } from "../store/slice/authslice";
import { redirect } from "@tanstack/react-router";

export const checkAuth = async ({ context }) => {
  const { queryClient, store } = context;
  try {
    const user = await queryClient.ensureQueryData({
      queryKey: ["currentUser"],
      queryFn: getCurrentUserData,
      retry: false,
    });


    if (!user) return false;
    store.dispatch(login(user));
    return true;
  } catch (error) {
    return redirect({
      to: "/auth",
    });
  }
};

export default checkAuth;
