'use server'

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function login(email, password) {
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/admin",
        });
    } catch (error) {
        console.error("Login failed:", error);
        // In a real app, you might want to inspect the error type
        // and return a more specific error message.
        throw new Error("Invalid email or password");
    }
}
async function logout() {}

async function register() {}

async function forgotPassword() {}

async function resetPassword() {}