'use server'

const { signIn } = require("next-auth/react");
const { redirect } = require("next/navigation");

export async function login(email, password) {
    console.log('hello');
    
    const res = await signIn("Credentials", {
        redirect: false,
        email,
        password,
    })
    if (res.ok) {
        console.log('login successful');
        
        redirect("/admin")
        return res;
    } else {
        throw new Error(res.error || "Login failed");
    }    
}
async function logout() {}