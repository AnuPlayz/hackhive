"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Features() {
  return (
    <>
      <div className="h-dvh">
        <h1 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
          Features
        </h1>
        <div className="grid grid-cols-2 gap-y-5 gap-x-14 w-full">
          <PinContainer
            title="/veronica"
            href="https://app.teamnexus.tech"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] ">
              <img src="https://media.discordapp.net/attachments/1064766648357240902/1218729481108459530/4.png?ex=6608b947&is=65f64447&hm=924c39a11f3150e35e132cac54ecb095d9e6d173ca636ec9b33cb7038861be8f&=&format=webp&quality=lossless&width=791&height=593" />
            </div>
          </PinContainer>
          <PinContainer
            title="/veronica"
            href="https://app.teamnexus.tech"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] ">
              <img src="https://media.discordapp.net/attachments/1064766648357240902/1218729481351725086/1.png?ex=6608b947&is=65f64447&hm=6ae188cb743c300cc816b56f7bfccaed50fbdd276397f2374c61687e6721c423&=&format=webp&quality=lossless&width=791&height=593" />
            </div>
          </PinContainer>
          <PinContainer
            title="/veronica"
            href="https://app.teamnexus.tech"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] ">
              <img src="https://media.discordapp.net/attachments/1064766648357240902/1218729481620029501/2.png?ex=6608b947&is=65f64447&hm=ea0d77cb5deb29ca18136e0f4601c93ec6f96b2d21cfea7df18f84e8088cf2a4&=&format=webp&quality=lossless&width=791&height=593" />
            </div>
          </PinContainer>
          <PinContainer
            title="/veronica"
            href="https://app.teamnexus.tech"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] ">
              <img src="https://media.discordapp.net/attachments/1064766648357240902/1218729481859240037/3.png?ex=6608b947&is=65f64447&hm=3f8dd3d627de2d2262b818d1943e969012f48dfa3e4c78241dd4edc140227e1d&=&format=webp&quality=lossless&width=791&height=593" />
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
}
