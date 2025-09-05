import Link from "next/link";

const AdvantageCard = ({ src }) => {
  return (
    <Link href={"not-found"}>
      <div className="rounded-md h-80 w-107">
        <img src={src} className="object-fill h-80" />
      </div>
    </Link>
  );
};

export default AdvantageCard;
