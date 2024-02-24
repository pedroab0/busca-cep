'use client'

import { useState } from "react";

import { TranslatedAddressInterface } from "@/types";
import { AddressCard, Header, AddressSearch } from "@/components";

export default function Home() {
  const [address, setAddress] = useState<TranslatedAddressInterface | undefined>(undefined)

  return (
    <>
      <Header />
      <main className="flex flex-col items-center gap-16">
        <AddressSearch setAddress={setAddress} />
        {!!address && <AddressCard address={address} />}
      </main>
    </>
  );
}
