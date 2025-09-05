"use client";

import { useState } from "react";
import Link from "next/link";

const MenuItem = ({ children, icon }) => {
  return (
    <Link href={"#"} className="m-0 p-0 flex flex-row justify-between items-center gap-2">
      <span className="material-symbols-rounded" style={{color: "#1f2937"}}>{icon}</span>
      <p>{children}</p>
    </Link>
  );
}

export default MenuItem;