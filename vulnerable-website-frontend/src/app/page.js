import Link from "next/link";
import UrunCard from "@/components/UrunCard/UrunCard";
import SubHeading from "@/components/SubHeading/SubHeading";
import AdvantageCard from "@/components/AdvantageCard/AdvantageCard";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-18">
        <section>
          <Link href={"not-found"}>
            <div className="rounded-md">
              <img src="home-image.png" alt="home-image" className="rounded-xl object-cover"/>
            </div>
          </Link>
        </section>

        <section className="">
          <SubHeading>Popüler Ürünler</SubHeading>
          <div className="flex flex-row gap-8 justify-between">
            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
            <UrunCard />
          </div>
        </section>

        <section>
          <SubHeading>Avantajlar</SubHeading>
          <div className="flex flex-row justify-between">
          <AdvantageCard src="firsat1.jpeg"/>
          <AdvantageCard src="firsat2.jpeg"/>
          <AdvantageCard src="firsat3.jpeg"/>
          </div>
        </section>
      </main>
    </div>
  );
}