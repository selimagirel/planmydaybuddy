import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => (
  <footer>
    <div className="px-10 py-6 items-center justify-between flex">
      <p className="text-gray-600">
        Created by{" "}
        <Link
          href={"https://twitter.com/selimpy?s=21&t=ldhiyWw4HDQeUOPV2TCuJg"}
          className="hover:underline transition"
        >
          Selim
        </Link>
      </p>
      <div className="flex items-center gap-x-6 text-gray-400">
        <span className="text-gray-500 mr-10">Powered by Chatgpt & gpt-4o</span>
      </div>
    </div>
  </footer>
);
