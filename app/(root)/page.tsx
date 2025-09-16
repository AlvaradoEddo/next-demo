import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StarupCard from "@/components/StarupCard";

export default async function Home({ searchParams }:
  { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query

  const posts = [{ 
    _createdAt: new Date(), 
    views: 55, 
    author: { _id: 1, name: 'John Doe' },
    _id: 1, 
    description: 'Esto es una descripcion', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWRH-oXGeRDRQxDcmt1EgAt-FzSg_qAQFBA&s',
    title: 'Titulo de la startup',
    category: 'Tecnologia'
  }]
    
  return (
    <>

      <section className="pink_container">
        <h1 className="heading">Conecta con empresarios</h1>

        <p className="sub-heading !max-w-3xl">
          Sube tus ideas, colabora, haz crecer tu red y obten noticias de competencias virtuales.</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Resultados para "${query}"` : "Todas las Startups"}
        </p>

        <ul className="mt-7 card_grid">

          {posts.length > 0 ? (
            posts.map((post, index) => (
              <StarupCard key={post?._id} post={post} />
            ))
          ): (
            <p>No se encontraron resultados.</p>
          )}

        </ul>

      </section>


    </>
  );
}
