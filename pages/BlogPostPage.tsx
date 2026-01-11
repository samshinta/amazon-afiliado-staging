
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_BLOG } from '../constants';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = MOCK_BLOG.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
        <Link to="/blog" className="text-indigo-600 font-bold hover:underline">Voltar para o Blog</Link>
      </div>
    );
  }

  // Injeção de JSON-LD para SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "author": { "@type": "Person", "name": post.author },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <article className="min-h-screen bg-white">
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      
      {/* Cover */}
      <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight serif">{post.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-12 border-b border-stone-100 pb-8 text-slate-500">
          <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
            {post.author[0]}
          </div>
          <div>
            <p className="font-bold text-slate-900">{post.author}</p>
            <p className="text-sm">{new Date(post.date).toLocaleDateString('pt-BR')}</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-lg">
          {post.content}
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
