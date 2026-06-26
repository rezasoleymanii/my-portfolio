import SectionTemplate from "../../ui/SectionTemplate";
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
        imageClass="w-[400px]"
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
                variant="primary"
                onClick={() => setActivePage("contact")}
                icon={<i className="bi bi-arrow-right ml-2"></i>}
                >
                View Contact
            </Button>
            <Button
                variant="outline"
                href="/cv.pdf"
                icon={<i className="bi bi-download ml-2"></i>}
                >
                Download CV
            </Button>
        </div>

    </SectionTemplate>
  );
}