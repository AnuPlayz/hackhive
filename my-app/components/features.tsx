"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Features() {
  return (
    <>
      <div className="h-dvh">
        <div className="grid grid-cols-2 gap-y-5 gap-x-14 w-full">
          <PinContainer
            title="/veronica"
            href="https://app.teamnexus.tech"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] ">
              <img src="https://media.discordapp.net/attachments/1064766648357240902/1218622434094088212/1.png?ex=66085595&is=65f5e095&hm=0eb2c391ede4e361f8221868a1488cd4cdc16f5dec2503ab461c1fc4db2966b3&=&format=webp&quality=lossless&width=791&height=593" />
            </div>
          </PinContainer>
          <PinContainer
            title="/veronica"
            href="https://app.teamnexus.tech"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] ">
              <img src="https://media.discordapp.net/attachments/1064766648357240902/1218622434455060480/2.png?ex=66085595&is=65f5e095&hm=5910b8b05737f9bc68fa1f7424b3a7603d9b7817501d29dd088fcadb7253933e&=&format=webp&quality=lossless&width=791&height=593" />
            </div>
          </PinContainer>
          <PinContainer
            title="/veronica"
            href="https://app.teamnexus.tech"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] ">
              <img src="https://media.discordapp.net/attachments/1064766648357240902/1218622434748534794/3.png?ex=66085595&is=65f5e095&hm=e74f276658ec757535453e37c281755716273ffdfaa783eddef60df7a899ab67&=&format=webp&quality=lossless&width=791&height=593" />
            </div>
          </PinContainer>
          <PinContainer
            title="/veronica"
            href="https://app.teamnexus.tech"
          >
            <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[25rem] ">
              <img src="https://media.discordapp.net/attachments/1064766648357240902/1218622434987475015/4.png?ex=66085595&is=65f5e095&hm=5e9a8c32e6d80471f074ba9a307d5dc9a53de07fe15fe284f8ee1a3b141684a2&=&format=webp&quality=lossless&width=791&height=593" />
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
}
