import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paradox Shop",
  description: "The Beautiful Paradox Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(quicksand.className, "dark")}>
        <Navbar />
        <div className="">       
          {children}
        </div>
      </body>
    </html>
  );
}

const SvgBG = () => (
  <div className="absolute top-0 left-0 -z-50  w-full h-screen ">
    <svg
      id="visual"
      viewBox="0 0 960 540"
      width="1920"
      height="1080"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      className="bg-cover w-full h-full"
    >
      <rect x="0" y="0" width="960" height="540" fill="#09090b" />
      <defs>
        <linearGradient id="grad1_0" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#7289da"
            stopOpacity="1"
          />
          <stop
            offset="85.55555555555554%"
            stopColor="#7289da"
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient id="grad1_1" x1="43.8%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#7289da"
            stopOpacity="1"
          />
          <stop
            offset="85.55555555555554%"
            stopColor="#23272a"
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient id="grad2_0" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#7289da"
            stopOpacity="1"
          />
          <stop
            offset="85.55555555555554%"
            stopColor="#7289da"
            stopOpacity="1"
          />
        </linearGradient>
        <linearGradient id="grad2_1" x1="0%" y1="0%" x2="56.3%" y2="100%">
          <stop
            offset="14.444444444444446%"
            stopColor="#23272a"
            stopOpacity="1"
          />
          <stop
            offset="85.55555555555554%"
            stopColor="#7289da"
            stopOpacity="1"
          />
        </linearGradient>
      </defs>
      <g transform="translate(960, 0)">
        <path
          d="M0 378C-35 319.8 -70 261.6 -94.5 228.2C-119 194.8 -133.1 186.2 -181 181C-228.9 175.9 -310.7 174.2 -349.2 144.7C-387.7 115.1 -382.9 57.5 -378 0L0 0Z"
          fill="#37597e"
        />
        <path
          d="M0 189C-17.5 159.9 -35 130.8 -47.3 114.1C-59.5 97.4 -66.5 93.1 -90.5 90.5C-114.5 87.9 -155.4 87.1 -174.6 72.3C-193.9 57.5 -191.4 28.8 -189 0L0 0Z"
          fill="#7289da"
        />
      </g>
      <g transform="translate(0, 540)">
        <path
          d="M0 -378C54.3 -379.6 108.5 -381.2 144.7 -349.2C180.8 -317.2 198.7 -251.7 203.6 -203.6C208.6 -155.6 200.4 -125.2 227.3 -94.1C254.2 -63.1 316.1 -31.6 378 0L0 0Z"
          fill="#37597e"
        />
        <path
          d="M0 -189C27.1 -189.8 54.3 -190.6 72.3 -174.6C90.4 -158.6 99.4 -125.8 101.8 -101.8C104.3 -77.8 100.2 -62.6 113.6 -47.1C127.1 -31.6 158 -15.8 189 0L0 0Z"
          fill="#7289da"
        />
      </g>
    </svg>
  </div>
);
