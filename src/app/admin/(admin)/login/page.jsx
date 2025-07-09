import { auth, authOptions } from "@/auth";
import AdminForm from "@/components/admin-form";
import { Card } from "@/components/ui/card";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AdminLogin() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/admin");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <Card className="w-full max-w-md p-8 space-y-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl hover:shadow-gray-700/30 transition-all duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-gray-400">Please sign in to continue</p>
        </div>
        <AdminForm />
      </Card>
    </div>
  );
}
