import { useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../contexts/auth-context"; // Adjust this import path to your project structure


export default function Index() {
  const { token }: any = useAuth();
  const router = useRouter();

  useEffect(() => {
    // 2. If no token is found, kick the user out to login
    if (!token) {
      router.replace("/login"); // Adjust target route name as needed
      return;
    }

    // 3. Safe to execute authenticated logic now
  }, [token, router]);

  // 🔴 CRITICAL: Prevent content flash/render if user is being redirected
  if (!token) {
    return null;
  }

  return null;
}
