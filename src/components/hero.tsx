//import { BsFacebook, BsLinkedin } from "react-icons/bs"
import Heropic from "../assets/old.jpg"
const Hero = () =>{
    return(
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-slate-300">I'm</p>
                <h1 className="text-6xl">Jayland Gamboa</h1>
                <hr />
                <p className="mt-10 text-xl text-slate-300 font-sans">
                    I am a software developer working at a small, dynamic company specializing in integrating various devices 
                    into clients' systems. With a keen eye for detail and a problem-solving mindset, I focus on building seamless, 
                    efficient solutions that enhance the functionality of our clients' operations. I thrive in a collaborative 
                    environment, where I can leverage my technical skills to tackle unique challenges and deliver 
                    customized software solutions that meet specific business needs.
                </p>
            </div>
            <div className="w-1/3 item-center ssm:w-fit">
                <img src={Heropic} alt="" width={250} height={250} className="rounded-full w-full border-8 border-white-600" />
            </div>
            <div className="lg:w-1/3 ssm:w-fit">
                <p>About me</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                </p>
                <button>
                    Click Me!
                </button>
            </div>
        </section>
    )
}

export default Hero