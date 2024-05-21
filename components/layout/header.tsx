import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export const Header: FC = () => {
  return (
    <header className="flex w-full top-0 h-[var(--navbar-height)] items-center gap-4 px-4 md:px-6 border-gray-200 dark:border-primary-foreground bg-white dark:bg-background  backdrop-blur-lg transition-all z-[9999999]">
      <nav className="flex-col gap-6 text-lg h- font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-screen">
        <div className="flex items-center justify-between w-full gap-5 ">
          <div className="max-w-[240px] grow shrink-0">
            <Link href="/" className="flex items-center z-40 font-semibold ">
              <Calendar className="h-6 w-6" />
              <h1 className="gap-2 items-center justify-center text-xl font-bold ml-5">
                PlannBuddy
              </h1>
            </Link>
          </div>
          <div className="md:space-x-5 shrink-0 flex ml-auto">
            {/* <Button className="md:flex hidden" variant="outline" size="sm">
              Register
            </Button>
            <Button size="sm">Login</Button> */}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
