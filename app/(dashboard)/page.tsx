import { UserButton } from "@clerk/nextjs";

export default function DashBoard() {
  return (
    <UserButton 
      afterSignOutUrl="/"
    />
  );
}
