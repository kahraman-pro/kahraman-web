import Link from "next/link";
import { btnPrimary, h1, lede, wrap } from "@/lib/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center pt-32 text-center">
      <div className={wrap}>
        <h1 className={h1}>Page not found.</h1>
        <p className={`${lede} mx-auto mt-6`}>The page you are looking for does not exist or has moved.</p>
        <div className="mt-9"><Link className={btnPrimary} href="/">Back to home</Link></div>
      </div>
    </section>
  );
}
