import { useEffect, useState } from "react";
import { fetchPosts } from "@/api/fetchPosts";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // If using ShadCN Input
import { Skeleton } from "@/components/ui/skeleton"; // Optional loading skeleton

export default function ApiPage() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder=" Search posts by title..."
          className="w-full"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-md" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((post) => (
            <Card key={post.id} className="p-4">
              <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.body}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
