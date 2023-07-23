import { list } from './utils/data';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="font-poopins text-xl font-semibold bg-primary text-white flex justify-between items-center w-full items-cente py-5 px-12 shadow-lg">
      <h1>
        <Link href="/">Al-qur'an API</Link>
      </h1>
      <ul className="flex gap-x-8">
        {list.map((data) => {
          return (
            <Link key={data.id} href={data.link}>
              {data.title}
            </Link>
          );
        })}
      </ul>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
