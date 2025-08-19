import { EmojiRating } from "@/components/EmojiRating";

const Page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-amber-50">
      <EmojiRating rate={1.2}/>
    </div>
  );
}

export default Page;