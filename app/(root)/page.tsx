import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StarupCard, { StartupCardType } from "@/components/StarupCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({ searchParams }:
  { searchParams: Promise<{ query?: string }> }) {

  const query = (await searchParams).query

  const params = { search: query || null }

  const session = await auth();
  console.log( session?.id );

  const { data: posts } = await sanityFetch({query: STARTUP_QUERY, params});

  
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
            posts.map((post: StartupCardType) => (
              <StarupCard key={post?._id} post={post} />
            ))
          ): (
            <p>No se encontraron resultados.</p>
          )}

        </ul>

      </section>

        <SanityLive />
    </>
  );
}
