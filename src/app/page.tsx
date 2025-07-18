import Header from "./ui/header";
import Slider from "./ui/slider";

export default async function Page() {
  return (
    <main className="h-screen bg-[#1C2E3D]">
      <Header />
      <div className="flex justify-center items-center px-2.5">
        <Slider />
      </div>
    </main>
  );
}
