"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { RotateCw } from "lucide-react";

export default function RefreshButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (

    <button
      className={`${
        isPending ? "cursor-not-allowed text-gray-400" : ""
      } text-md text-gray-500 hover:text-gray-900 justify-center`}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.refresh();
        });
      }}
    >
        
      {isPending ? "Refreshing Cart" : <RotateCw/>}
    </button>
        

  );
}
