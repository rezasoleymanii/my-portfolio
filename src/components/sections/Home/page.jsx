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
            titleClass="text-[70px]"
            highlight="Reza"
            subtitle={
                <>
                I build modern and responsive <br />
                web applications.
                </>
            }
            subtitleClass="text-[30px]"
            description={
                <>
                I'm a Frontend Developer focused on
                <br />
                building beautiful, functional and
                <br />
                user-friendly websites.
                </>
            }
            image={bacbackground}
            >
            <div className="flex gap-2 pt-5">

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

            <div className="pt-6">
                <span className="text-[#727f8b]">
                TECHNOLOGIES
                </span>

                <IconsTechnologies />
                <div className="flex items-center gap-6">
                    <PageAddress type="github" href="https://github.com/rezasoleymanii"/>
                    <PageAddress type="Phone" onClick={() => setActivePage("contact")}/>
                    <PageAddress type="instagram" onClick={() => setActivePage("contact")}/>
                </div>
            </div>
        </SectionTemplate>
    );
}