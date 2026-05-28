import { HomeCraft } from "@/components/home/HomeCraft";
import { HomeFeatured } from "@/components/home/HomeFeatured";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeJournal } from "@/components/home/HomeJournal";
import { HomeMarquee } from "@/components/home/HomeMarquee";
import { HomeNewsletter } from "@/components/home/HomeNewsletter";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeMarquee />
      <HomeFeatured />
      <HomeCraft />
      <HomeJournal />
      <HomeNewsletter />
    </>
  );
}
