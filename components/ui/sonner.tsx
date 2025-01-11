"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-white text-black border-4 border-black shadow-[6px_6px_0px_#000] rounded-lg p-4 m-4",
          description: "text-gray-700 text-lg",
          actionButton:
            "bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-[2px_2px_0px_#000] hover:bg-pink-600",
          cancelButton:
            "bg-gray-300 text-black font-bold py-2 px-4 rounded-lg shadow-[2px_2px_0px_#000] hover:bg-gray-400",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
