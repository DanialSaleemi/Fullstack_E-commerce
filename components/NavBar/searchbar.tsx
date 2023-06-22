import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  return (
    <div className="flex rounded-lg w-full border max-w-sm items-center space-x-2">
        <Search/>
      <Input type="string" placeholder="What are you looking for" />
    </div>
  )
}
