import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className=" flex rounded-lg w-full flex-grow flex-shrink border items-center">
        <Search/>
      <Input type="text" className="lg:px-5 lg:py-2" placeholder="Search here" />
    </div>
  )
}
