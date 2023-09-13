import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Input from "@/components/input";
import { useRouter } from "next/router";
import Login from "@/components/login";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function Home() {
  return (
    <div className="container" style={{ width: "33%" }}>
      <Login />
    </div>
  );
}
