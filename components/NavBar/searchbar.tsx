import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="flex rounded-lg w-full border max-w-sm items-center space-x-2">
        <Search/>
      <Input type="text" className="px-5 py-2" placeholder="What are you looking for" />
    </div>
  )
}
