import Link from "next/link"
import Button from "./components/Button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h2 className="text-4xl font-semibold font-sans">
          Test Project powered by
          <p className="transform hover:translate-x-2 transition duration-300">
            <span className="text-blue-700">NextJS 13</span>
          </p>
          and
          <p className="transform hover:translate-x-4 transition duration-300">
            <span className="text-teal-500">Tailwind</span>
          </p>
        </h2>
      </div>
      <div className="items-center font-mono text-sm lg:flex pt-10">
        <div className="items-center">
          <Link href="/employee/list">
            <Button bgColor="bg-blue-500" label="View Employees" />
          </Link>
        </div>
      </div>
    </main>
  )
}
