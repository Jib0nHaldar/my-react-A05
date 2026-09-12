import Logo from "../assets/logo-text.png"

const Nav = () => {
    return (
    <div className="border-b border-gray-100">
        <nav className="flex justify-between container mx-auto py-4 ">
            <img src={Logo} className="h-8" alt="Logo" />


            <ul className="flex gap-4 items-center">
                <li className="text-pink-600 font-medium">Home</li>
                <li className="text-[#475569] font-medium">Technologies</li>
                <li className="text-[#475569] font-medium">Project</li>
                <li className="text-[#475569] font-medium">About</li>
                <li className="text-[#475569] font-medium">Contact</li>
            </ul>

            <div className="flex gap-4 items-center">
                <button className="text-[#475569] font-medium" >Sign In</button>
                <button className="bg-pink-600 text-white px-4.5 py-2 rounded-4xl hover:bg-pink-700" >Sign Up</button>
            </div>

        </nav>
    </div>
    )
}

export default Nav;