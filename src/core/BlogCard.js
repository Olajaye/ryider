import { ArrowUpRight } from "lucide-react";

const BlogPostCard = ({ post }) => (
  <div className={`group relative`}>
    <div className="relative h-60 w-full overflow-hidden  bg-white">
      <img
        src={post.image}
        alt={post.title}
        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="mt-4">
      <div className="flex items-center text-sm text-green">
        <span>{post.author}</span>
        <span className="mx-1">•</span>
        <span>{post.date}</span>
      </div>
      <div className="mt-2 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {post.title}
          </h3>
          <p className="mt-2 text-gray-500">{post.description}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-600" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default BlogPostCard