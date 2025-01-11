"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] rounded-lg p-6 text-lg m-4"
          >
            <div className="grid gap-2">
              {title && (
                <ToastTitle className="text-black font-bold text-2xl">
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-gray-700">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="absolute top-4 right-4 text-black hover:text-red-500" />
          </Toast>
        )
      })}
      <ToastViewport className="fixed bottom-4 right-4 flex flex-col gap-4" />
    </ToastProvider>
  )
}
