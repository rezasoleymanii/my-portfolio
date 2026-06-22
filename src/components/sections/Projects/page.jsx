import SectionTemplate from "../../ui/SectionTemplate";
import SkillBar from "../../ui/SkillBar";
import IconsTechnologies from "../../../../public/icons/Technologies"
import PageAddress from "../../../../public/icons/PageAddress"
import Button from "../../ui/Button"
import bacbackground from "../../../../public/images/back-profil.png"
export default function Projects({setActivePage}){
    return (
    <SectionTemplate
        badge="Projects Me"
        badgeClass="cursor-pointer"
        titleClass="text-[70px]"
        title="My"
        highlight="Works"
        subtitle={
            <>
                The things I've done so far, <br/>
                from max shop to learning
                 react and everything else.
            </>
        }
        subtitleClass="text-[20px]"
        description={
            <>
                And so far I have expanded to Expo, React/React Native,<br/>
                quasar, tailwindcss, sass/scss, JavaScript UI/UX and TypeScript.<br/>
                I have trained and learned and am looking for work.
            </>
        }
        descriptionClass="text-[16px]"
        image={bacbackground}
        >
        <div className="flex gap-2 pt-5">
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