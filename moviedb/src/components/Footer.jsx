import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-6">
      <p className="text-gray-400 hover:text-gray-500 text-sm hover:transition">
        Created by <Link href={"https://github.com/Adexbam02"} className="underline">Adexbam02</Link>
      </p>
    </div>
  );
}
