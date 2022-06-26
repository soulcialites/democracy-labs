// @ts-nocheck
import type { ReactNode } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

import { AppConfig } from "@/utils/AppConfig";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-black text-white">
    {props.meta}

    <div className="min-h-vh mx-auto h-10 w-full">
      <div className="flex items-center justify-between  px-8 py-4">
        <div className=" align-center flex items-center justify-between">
          <Link href="/">
            <span className="cursor-pointer text-xl font-bold text-white">
              <span className="text-3l">{AppConfig.emoji}</span>{" "}
              {AppConfig.title}
            </span>
          </Link>
        </div>
        <div className="text-right">
          <ConnectButton />
        </div>
      </div>

<<<<<<< HEAD
      <div className="content items-center justify-center bg-neutral-200 pb-10 text-black">
=======
      <div className="content justify-center items-center text-black bg-neutral-200">
>>>>>>> 467a8c3e8ac4836e731c3e1266184fdafb8ef02f
        {props.children}
      </div>

      <div className="border-t border-gray-300 bg-black py-8 text-center text-sm">
        <p className="mb-2 text-base">Annette, Dino, Justin, Kames</p>
        <div>© Copyright {new Date().getFullYear()} Kames Geraghty</div>
      </div>
    </div>
  </div>
);

export { Main };
