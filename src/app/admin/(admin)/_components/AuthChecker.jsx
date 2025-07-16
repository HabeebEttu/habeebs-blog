import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AuthChecker({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/admin/login");
  }
  return <>{children}</>;
}
