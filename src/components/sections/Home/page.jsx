import bacbackground from "../../../../public/images/back-profil.png"
import IconsTechnologies from "../../../../public/icons/Technologies"
import PageAddress from "../../../../public/icons/PageAddress"
export default function Home({ setActivePage }){
    return(
        <div className="flex justify-between pt-5 pl-10 ">
            <div className="flex flex-col gap-10 pt-5 pl-15">
                <div className="flex flex-col gap-2">
                    <span className="w-40 text-center py-[1px] px-[9px] text-[16px] text-[#047ff5] rounded-full border border-[#0761bb]">
                        Frontend Developer
                    </span>
                    <h1 className="text-[70px]">
                        Hi, I'm 
                    <span className="text-[#047ff5]">Reza</span>
                    </h1>
                    <span className="text-[30px]">
                        I build modern and responsive <br />web applications.
                    </span>
                    <p className="text-[#727f8b]">
                        I'm a Frontend Developer focused on<br />building beautiful, functional and<br />user-friendly websites.
                    </p>
                    <div className="flex  gap-2 pt-5 ">
                        <button className="bg-[linear-gradient(to_left,#0241c1,#0965e5)] py-[12px] px-[20px] rounded-lg border border-[#0761bb]"
                            onClick={() => setActivePage("projects")}>View Projects <i className="bi bi-arrow-right"></i>
                        </button>
                        <button className="py-[12px] px-[20px] rounded-lg border border-[#454f64]">
                            Download CV <i className="bi bi-download"></i>
                        </button>
                    </div>
                </div>
                <div>
                    <span className="text-[#727f8b]">TECHNOLOGIEES</span>
                    <IconsTechnologies />
                    <PageAddress />
                </div>
            </div>
            <div> <img className="w-xl" src={bacbackground.src} alt="" /> </div>
        </div>
    );
}