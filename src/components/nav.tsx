import { AiOutlineClose } from "react-icons/ai"
import { CgNametag } from "react-icons/cg"
import { HiMenuAlt1 } from "react-icons/hi"
import NavMobile from "./navmobile"
import { useState } from "react"

const Nav = () =>{

    {/*Open and close toggle function for mobile*/}
    const [toggle, setToggle] = useState(false)
    const openMenu = () => {setToggle(true)
        console.log('Clicked1')}
    const closeMenu = () => {setToggle(false) 
        console.log('CLiked')}

    return (
        <>
            <div className="flex items-center justify-between p-10 lg:flex-row">
                <div className="text-white font-mono text-3xl tracking-wider flex items-center"><CgNametag /> Jayland</div>
                {/* Navigation bar for 720 up*/}
                <div className="space-x-4">
                    <div className="ssm:hidden lg:block space-x-2">
                        <div className="space-x-4">
                            <a href="#" className="text-white hover:bg-indigo-800 transition-all rounded-full  px-5 py-2 text-xl">Skills</a>
                            <a href="#" className="text-white hover:bg-indigo-800 transition-all rounded-full  px-5 py-2 text-xl">Projects</a>
                        </div>
                    </div>
                    {/* Navigation bar for 720 below*/}
                    <div className="ssm:block lg:hidden">
                        {toggle ? (<AiOutlineClose onClick={closeMenu} size={30} className="text-white"/>) : (<HiMenuAlt1 onClick={openMenu} size={30} className="text-white"/>)}
                        {toggle ? (<NavMobile />):(<div />)}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Nav