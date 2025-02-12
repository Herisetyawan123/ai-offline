import { EditIcon, Home, Inbox, Settings } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

// Menu items.
const items = [
  {
    title: "Explore",
    url: "/",
    icon: Home,
  },
  {
    title: "New chat",
    url: "/chat",
    icon: Inbox,
  },
  {
    title: "Settings",
    url: "/setting",
    icon: Settings,
  },
]

// sidebar
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex justify-between py-8">
            <h1 className="font-bold text-xl">AI Offline</h1>

            <Dialog>
              <DialogTrigger>
                <EditIcon size={24} />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center">create new chat</DialogTitle>
                  <DialogDescription className="text-center">
                    This action wil be create new chat
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input id="name" className="col-span-4" placeholder="Type your message" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose>
                    <Button variant={'secondary'}>cancel</Button>
                  </DialogClose>
                  <Button variant={'default'}>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="text-md font-bold py-5">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

