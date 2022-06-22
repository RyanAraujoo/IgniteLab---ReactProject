import { Logo } from "./Logo";

export default function Header () {
  return (
    <div className="w-full py-28 flex items-center justify-center bg-gray-700 border-b border-gray-600">
        <Logo />
    </div>
  )
}