import bacbackground from "../../../../public/images/back-profil.png"
import IconsTechnologies from "../../../../public/icons/Technologies"
import PageAddress from "../../../../public/icons/PageAddress"
import SectionTemplate from "../../ui/SectionTemplate"
import Button from "../../ui/Button"
export default function Home({ setActivePage }){
    return(
        <SectionTemplate
            badge="Frontend Developer"
            title="Hi, I'm"
            titleClass="
            text-[38px]
            w-fit
            sm:text-[45px]
            md:text-[55px]
            lg:text-[70px]
            "
            highlight="Reza"
            ProjectsClass="hidden"
            subtitle={
                <>
                I build modern and responsive <br />
                web applications.
                </>
            }
            subtitleClass="
            text-[18px]
            w-fit
            sm:text-[22px]
            md:text-[25px]
            lg:text-[30px]
            "
            description={
                <>
                I'm a Frontend Developer focused on
                <br />
                building beautiful, functional and
                <br />
                user-friendly websites.
                </>
            }
            descriptionClass="
            text-[13px]
            w-fit
            sm:text-[15px]
            md:text-[16px]
            "
            image={bacbackground}
            
            centerClass="
            flex-col-reverse
            md:flex-col-reverse
            lg:flex-row "
            
            profileClass="
            items-center
            lg:items-start
            lg:text-left "
            >
            <div className="flex flex-col  gap-3 pt-5 w-fit justify-center lg:justify-start flex-row">

                <Button
                variant="primary"
                onClick={() => setActivePage("about")}
                icon={<i className="bi bi-arrow-right ml-2"></i>}
                >
                View About
                </Button>

                <Button
                variant="outline"
                href="/cv.pdf"
                icon={<i className="bi bi-download ml-2"></i>}
                >
                Download CV
                </Button>

            </div>

            <div className="pt-6 text-center w-fit lg:text-left">
                <span className="text-[#727f8b]">
                TECHNOLOGIES
                </span>

                <IconsTechnologies  />
                <div className="flex justify-center lg:justify-start items-center gap-6 pt-4">
                    <PageAddress type="github" href="https://github.com/rezasoleymanii"/>
                    <PageAddress type="Phone" onClick={() => setActivePage("contact")}/>
                    <PageAddress type="instagram" onClick={() => setActivePage("contact")}/>
                </div>
            </div>
        </SectionTemplate>
    );
}