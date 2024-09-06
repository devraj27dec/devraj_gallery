import cloudinary from "@/utils/cloudinaryConfig";
import { ForceRefresh } from "@/components/force-refresh";
import FavoritesList from "./favorites-list";

export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function FavoritesPage() {
  const results = (await cloudinary.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(20)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className=" flex flex-col gap-8">
        <div className=" flex justify-between">
          <h1 className=" text-4xl font-bold">Favorite Images</h1>
        </div>
        <FavoritesList initialResources={results.resources} />
      </div>
    </section>
  );
}
