import bacbackground from "../../../../public/images/back-profil.png"
import IconsTechnologies from "../../../../public/icons/Technologies"
import PageAddress from "../../../../public/icons/PageAddress"
import SectionTemplate from "../../ui/SectionTemplate"
import Button from "../../ui/Button"
export default function Contact(){
    return(
        <SectionTemplate
            badge="Frontend Developer"
            title="I'm"
            titleClass="text-[70px]"
            highlight="Reza soleymani"
            ProjectsClass="hidden"
            subtitle={
                <>
                Profile and contact me 
                </>
            }
            subtitleClass="text-[30px]"
            description={
                <>
                Residential address: Karaj Mohammad Shahr
                <br />
                age: 1385
                <br />
                Email address: rezasoleymanii@gmail.com
                </>
            }
            image={bacbackground}
            >
            <div className="flex gap-2 pt-5">

                <div className="flex  flex-col items-center gap-6">
                    <div className="flex items-center gap-5">
                        <PageAddress type="github" href="https://github.com/rezasoleymanii"/>
                        <p>Address git hup: <span className="text-[#047ff5]">https://github.com/rezasoleymanii</span></p>
                    </div>
                    <div className="flex w-full items-center gap-5">
                        <i className="bi bi-telephone text-[30px]"></i>
                        <p>Contact number: <span className="text-[#047ff5]">0933 249 8847</span></p>
                    </div>
                    <div className="flex w-full items-center gap-5">
                        <PageAddress type="instagram" onClick={() => setActivePage("contact")}/>
                        <p>Instagram address: <span className="text-[#047ff5]">Reza85_84</span></p>
                    </div>
                </div>
            </div>
        </SectionTemplate>
    );
}