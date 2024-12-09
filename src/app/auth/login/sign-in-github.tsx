
import { signIn } from "@/auth"
import { Button } from "../../../components/ui/button"
import { FaGithub } from "react-icons/fa"
 
export default function SignInGithub() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github",{redirectTo:"/dashboard"})
      }}
      
    >
      <Button type="submit" variant="outline" className="w-full">
        <FaGithub/>
         GitHub</Button>
    </form>
  )
} 