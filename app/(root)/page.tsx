import MemoryContainer from "@/components/memory-container";
import Link from "next/link";
import { FaPlusCircle, FaSearch, FaPenNib } from "react-icons/fa";

export default function Home() {
  const memories = [
    {
      id: 1,
      title: "My First Memory",
      date: "May 28, 1:38pm",
      memory: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      libero amet possimus nam, eaque suscipit eos. Voluptas, hic quis quam
      fugit rem, temporibus ullam deserunt beatae at voluptate quo
      voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Officia aspernatur dolores expedita aliquam praesentium quod vero
      nihil eum fugiat porro in et nesciunt obcaecati perferendis harum,
      corrupti atque esse. Necessitatibus! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Incidunt libero amet possimus nam, eaque
      suscipit eos. Voluptas, hic quis quam fugit rem, temporibus ullam
      deserunt beatae at voluptate quo voluptatum. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Officia aspernatur dolores expedita
      aliquam praesentium quod vero nihil eum fugiat porro in et nesciunt
      obcaecati perferendis harum, corrupti atque esse. Necessitatibus!`,
    },
    {
      id: 2,
      title: "My First Memory",
      date: "May 28, 1:38pm",
      memory: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      libero amet possimus nam, eaque suscipit eos. Voluptas, hic quis quam
      fugit rem, temporibus ullam deserunt beatae at voluptate quo
      voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Officia aspernatur dolores expedita aliquam praesentium quod vero
      nihil eum fugiat porro in et nesciunt obcaecati perferendis harum,
      corrupti atque esse. Necessitatibus! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Incidunt libero amet possimus nam, eaque
      suscipit eos. Voluptas, hic quis quam fugit rem, temporibus ullam
      deserunt beatae at voluptate quo voluptatum. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Officia aspernatur dolores expedita
      aliquam praesentium quod vero nihil eum fugiat porro in et nesciunt
      obcaecati perferendis harum, corrupti atque esse. Necessitatibus!`,
    },
    {
      id: 3,
      title: "My First Memory",
      date: "May 28, 1:38pm",
      memory: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      libero amet possimus nam, eaque suscipit eos. Voluptas, hic quis quam
      fugit rem, temporibus ullam deserunt beatae at voluptate quo
      voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Officia aspernatur dolores expedita aliquam praesentium quod vero
      nihil eum fugiat porro in et nesciunt obcaecati perferendis harum,
      corrupti atque esse. Necessitatibus! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Incidunt libero amet possimus nam, eaque
      suscipit eos. Voluptas, hic quis quam fugit rem, temporibus ullam
      deserunt beatae at voluptate quo voluptatum. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Officia aspernatur dolores expedita
      aliquam praesentium quod vero nihil eum fugiat porro in et nesciunt
      obcaecati perferendis harum, corrupti atque esse. Necessitatibus!`,
    },
    {
      id: 4,
      title: "My First Memory",
      date: "May 28, 1:38pm",
      memory: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
      libero amet possimus nam, eaque suscipit eos. Voluptas, hic quis quam
      fugit rem, temporibus ullam deserunt beatae at voluptate quo
      voluptatum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Officia aspernatur dolores expedita aliquam praesentium quod vero
      nihil eum fugiat porro in et nesciunt obcaecati perferendis harum,
      corrupti atque esse. Necessitatibus! Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Incidunt libero amet possimus nam, eaque
      suscipit eos. Voluptas, hic quis quam fugit rem, temporibus ullam
      deserunt beatae at voluptate quo voluptatum. Lorem ipsum dolor sit,
      amet consectetur adipisicing elit. Officia aspernatur dolores expedita
      aliquam praesentium quod vero nihil eum fugiat porro in et nesciunt
      obcaecati perferendis harum, corrupti atque esse. Necessitatibus!`,
    },
  ];
  return (
    <>
      <span className="font-bold text-xl">Home</span>
      <div className="flex justify-end gap-4">
        <div className="lg:flex-[0.4] relative flex-1 h-12  items-center justify-center rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none w-full px-4 py-2 rounded-lg h-12"
          />
          <FaSearch className="absolute right-5 top-4 w-5 h-5" />
        </div>
        <Link
          href="/new-memory"
          className=" w-36 h-12 rounded-lg flex items-center justify-center space-x-2 bg-black text-white hover:bg-white hover:text-black"
        >
          <FaPlusCircle className="h-5 w-5" />
          <span className="font-semibold text-l">New Memory</span>
        </Link>
      </div>
      <span className="font-bold text-lg">Recent Memories</span>
      {memories.slice(0, 2).map((item, idx) => (
        <MemoryContainer
          key={idx}
          title={item.title}
          date={item.date}
          memory={item.memory}
        />
      ))}
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
      <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    </>
  );
}
