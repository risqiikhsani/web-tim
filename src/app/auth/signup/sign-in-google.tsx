
import { signIn } from "@/auth"
import { Button } from "../../../components/ui/button"
import { FaGoogle } from "react-icons/fa"
 
export default function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google",{redirectTo:"/dashboard"})
      }}
      
    >
      <Button type="submit" variant="outline" className="w-full">
        <FaGoogle/>
         Google</Button>
    </form>
  )
} 