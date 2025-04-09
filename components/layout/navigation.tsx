"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusinessIcon,
  InstagramIcon,
  FacebookIcon,
  HomeIcon,
  RssIcon,
  ShoppingCartIcon,
  SquareUserRoundIcon,
  TwitterIcon,
  UserPenIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavGroup } from "@/type/navigation";

const navLinks: NavGroup[] = [
  {
    title: "",
    url: "#",
    items: [
      {
        title: "Homepage",
        url: "/",
        icon: HomeIcon,
      },
      {
        title: "Projects",
        url: "/projects",
        icon: BriefcaseBusinessIcon,
      },
      {
        title: "Store",
        url: "/store",
        icon: ShoppingCartIcon,
      },
      {
        title: "About",
        url: "/about",
        icon: SquareUserRoundIcon,
      },
      {
        title: "Blog",
        url: "/blog",
        icon: RssIcon,
      },
      {
        title: "Contact",
        url: "/contact",
        icon: UserPenIcon,
      },
    ],
  },
  {
    title: "Social",
    url: "#",
    items: [
      {
        title: "Twitter",
        url: "https://x.com/AiBouwmeesters",
        icon: TwitterIcon,
        target: "_blank",
      },
      {
        title: "Facebook",
        url: "https://www.facebook.com/",
        icon: FacebookIcon,
        target: "_blank",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/aibouwmeesters/",
        icon: InstagramIcon,
        target: "_blank",
      },
    ],
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const replacedPathname = pathname.split("/").filter(Boolean)[0];

  return (
    <Sidebar className="!border-e-0 p-3">
      <SidebarHeader className="mb-4">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center space-x-4">
            <Avatar className="size-12">
              <AvatarImage
                className="rounded-full w-full h-full object-cover"
                src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <AvatarFallback>PC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 leading-none">
              <span className="font-semibold">AI Bouwmeesters</span>
              <span className="text-sm"></span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="space-y-4">
          {navLinks.map((item) => (
            <>
              {item.title ? (
                <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              ) : null}
              <SidebarGroupContent>
                <SidebarMenu>
                  {item?.items &&
                    item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className="text-base rounded-2xl px-3 h-auto data-[active=true]:bg-background data-[active=true]:!font-semibold"
                          isActive={
                            (item.url === "/" &&
                              replacedPathname === undefined) ||
                            item.url.replace("/", "") === replacedPathname
                          }
                        >
                          <Link href={item.url} target={item.target}>
                            {item.icon && <item.icon className="!size-5" />}
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </>
          ))}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <ThemeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}