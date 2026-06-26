import MaxWorks from "../../../public/images/max works1.jpg"
import TutorialCategory from "../../../public/images/tutorial-category.jpg"
import Arvand from "../../../public/images/arvand.png"
import Vetx from "../../../public/images/vetx.jpeg"
import MyProfil from "../../../public/images/my-porfil.png"
import TicTacToe from "../../../public/images/tic-tac-toe.png"
import SkillBar from "./SkillBar";
import Button from "./Button"
export default function Works(){
    return(
        <div className="flex flex-col w-full gap-5 pt-5 ">
            <div>
                <div className=" flex flex-col gap-5 mb-5 pl-20">
                    <span className={`
                        w-fitinline-flex items-center justify-center w-fit py-[1px]
                        px-[9px] text-[20px] text-[#047ff5] rounded-full border border-[#0761bb]`}>
                        Max Shop
                    </span>
                    <h3 className="text-[30px]">Projects I've worked on and <span className="text-[#047ff5] "
                    >learned from so far</span>
                    </h3>                    
                </div>
                <div className="flex">
                    <div className="flex flex-col mb-10 gap-5 items-center w-full">
                        <img className="w-xl" src={MaxWorks.src} alt=""/>
                        <div className="flex flex-col text-[20px] gap-8">
                            <p className="w-fitinline-flex items-center justify-center w-fit py-[1px]
                            px-[9px] text-[20px] bg-[linear-gradient(to_left,#0241c1,#0965e5)] 
                            rounded-full border border-[#0761bb]"
                           >Max's first project was about us.</p>
                            <div>
                                <h3 className="text-[22px] font-semibold mb-5">
                                    Percentage of <span className="text-[#047ff5]">knowledge</span>
                                </h3>
                                <SkillBar title="HTML" value={45}/>
                                <SkillBar title="CSS" value={30}/>
                                <SkillBar title="JavaScript" value={10}/>
                            </div>                
                            <Button
                                variant="click"
                                href="https://github.com/rezasoleymanii/max-Works1"
                                icon={<i className="bi bi-download ml-2"></i>}
                                >
                                View the code Git hub
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 gap-5 items-center w-full">
                        <img className="w-xl h-[970px]" src={TutorialCategory.src} alt=""/>
                        <div className="flex flex-col text-[20px] gap-8 ">
                            <p className="w-fitinline-flex items-center justify-center w-fit py-[1px]
                            px-[9px] text-[20px] bg-[linear-gradient(to_left,#0241c1,#0965e5)] 
                            rounded-full border border-[#0761bb]"
                           >And pages like TutorialCategory.</p>
                            <div>
                                <h3 className="text-[22px] font-semibold mb-5">
                                    Percentage of <span className="text-[#047ff5]">knowledge</span>
                                </h3>
                                <SkillBar title="HTML" value={60}/>
                                <SkillBar title="CSS" value={50}/>
                                <SkillBar title="JavaScript" value={20}/>
                            </div>   
                            <Button
                                variant="click"
                                href="https://github.com/rezasoleymanii/Tutorial-Category"
                                icon={<i className="bi bi-download ml-2"></i>}
                                >
                                View the code Git hub
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" flex flex-col gap-5 mb-5 pl-20">
                    <span className={`
                        w-fitinline-flex items-center justify-center w-fit py-[1px]
                        px-[9px] text-[20px] text-[#047ff5] rounded-full border border-[#0761bb]`}>
                        Start React
                    </span>
                    <h3 className="text-[30px]">Practice until you <span className="text-[#047ff5] "
                    >learn it perfectly</span>
                    </h3>                    
                </div>
                <div className="flex">
                    <div className="flex flex-col mb-10 gap-5 items-center w-full">
                        <img className="w-xl" src={Arvand.src} alt=""/>
                        <div className="flex flex-col text-[20px] gap-8">
                            <p className="w-fitinline-flex items-center justify-center w-fit py-[1px]
                            px-[9px] text-[20px] bg-[linear-gradient(to_left,#0241c1,#0965e5)] 
                            rounded-full border border-[#0761bb]"
                           >My first practice with react was with Arvand.</p>
                            <div>
                                <h3 className="text-[22px] font-semibold mb-5">
                                    Percentage of <span className="text-[#047ff5]">knowledge</span>
                                </h3>
                                <SkillBar title="HTML" value={95}/>
                                <SkillBar title="CSS" value={75}/>
                                <SkillBar title="JavaScript" value={50}/>
                                <SkillBar title="React" value={45}/>
                            </div>                
                            <Button
                                variant="click"
                                href="https://github.com/rezasoleymanii/arvand1"
                                icon={<i className="bi bi-download ml-2"></i>}
                                >
                                View the code Git hub
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 gap-5 items-center w-full">
                        <img className="w-xl h-[660px]" src={Vetx.src} alt=""/>
                        <div className="flex flex-col text-[20px] gap-8 ">
                            <p className="w-fitinline-flex items-center justify-center w-fit py-[1px]
                            px-[9px] text-[20px] bg-[linear-gradient(to_left,#0241c1,#0965e5)] 
                            rounded-full border border-[#0761bb]"
                           >The second one I used was Vitx, which I had for the second workout.</p>
                            <div>
                                <h3 className="text-[22px] font-semibold mb-5">
                                    Percentage of <span className="text-[#047ff5]">knowledge</span>
                                </h3>
                                <SkillBar title="HTML" value={95}/>
                                <SkillBar title="CSS" value={75}/>
                                <SkillBar title="JavaScript" value={50}/>
                                <SkillBar title="React" value={45}/>
                            </div>   
                            <Button
                                variant="click"
                                href="https://github.com/rezasoleymanii/my-vite-app"
                                icon={<i className="bi bi-download ml-2"></i>}
                                >
                                View the code Git hub
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" flex flex-col gap-5 mb-5 pl-20">
                    <span className={`
                        w-fitinline-flex items-center justify-center w-fit py-[1px]
                        px-[9px] text-[20px] text-[#047ff5] rounded-full border border-[#0761bb]`}>
                        Frontend Developer
                    </span>
                    <h3 className="text-[30px]">And complete training to become a <span className="text-[#047ff5] "
                    >Frontend Developer</span>
                    </h3>                    
                </div>
                <div className="flex">
                    <div className="flex flex-col mb-10 gap-5 items-center w-full">
                        <img className="w-xl" src={MyProfil.src} alt=""/>
                        <div className="flex flex-col text-[20px] gap-8">
                            <p className="w-fitinline-flex items-center justify-center w-fit py-[1px]
                            px-[9px] text-[20px] bg-[linear-gradient(to_left,#0241c1,#0965e5)] 
                            rounded-full border border-[#0761bb]"
                           >And I wrote my introduction.</p>
                            <div>
                                <h3 className="text-[22px] font-semibold mb-5">
                                    Percentage of <span className="text-[#047ff5]">knowledge</span>
                                </h3>

                                <SkillBar title="HTML" value={95}/>
                                <SkillBar title="CSS" value={90}/>
                                <SkillBar title="JavaScript" value={75}/>
                                <SkillBar title="React" value={80}/>
                                <SkillBar title="Tailwind" value={90}/>
                                <SkillBar title="TypeScript" value={60}/>
                            </div>                
                            <Button
                                variant="click"
                                href="https://github.com/rezasoleymanii/my-portfolio"
                                icon={<i className="bi bi-download ml-2"></i>}
                                >
                                View the code Git hub
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 gap-5 items-center w-full">
                        <img className="w-xl h-[280px]" src={TicTacToe.src} alt=""/>
                        <div className="flex flex-col text-[20px] gap-8 ">
                            <p className="w-fitinline-flex items-center justify-center w-fit py-[1px]
                            px-[9px] text-[20px] bg-[linear-gradient(to_left,#0241c1,#0965e5)] 
                            rounded-full border border-[#0761bb]"
                           >and a React project.</p>
                            <div>
                                <h3 className="text-[22px] font-semibold mb-5">
                                    Percentage of <span className="text-[#047ff5]">knowledge</span>
                                </h3>

                                <SkillBar title="HTML" value={95}/>
                                <SkillBar title="CSS" value={90}/>
                                <SkillBar title="JavaScript" value={75}/>
                                <SkillBar title="React" value={80}/>
                                <SkillBar title="Tailwind" value={90}/>
                                <SkillBar title="TypeScript" value={60}/>
                            </div>   
                            <Button
                                variant="click"
                                href="https://github.com/rezasoleymanii/tic-tac-toe"
                                icon={<i className="bi bi-download ml-2"></i>}
                                >
                                View the code Git hub
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}