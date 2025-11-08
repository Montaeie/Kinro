import { Container } from "@/components/container";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { DivideX } from "@/components/divide";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { draftMode } from "next/headers";
import { RichText } from '@payloadcms/richtext-lexical/react';

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const data = await params;
  const payload = await getPayload({ config: configPromise });

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: data.slug
      }
    },
    limit: 1,
  });

  const post = posts[0];

  if (!post) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: post.meta?.title || post.title,
    description: post.meta?.description || post.description,
  };
}

export default async function SingleBlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const data = await params;
  const search = await searchParams;
  const payload = await getPayload({ config: configPromise });
  const { isEnabled: isDraftMode } = await draftMode();
  const isPreview = search.timestamp !== undefined;

  const { docs: posts } = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: data.slug
      }
    },
    limit: 1,
    draft: isDraftMode || isPreview,
  });

  const post = posts[0];

  if (!post) {
    redirect("/blog");
  }

  // Get the image URL
  const imageUrl = post.imageUrl || (typeof post.featuredImage === 'object' && post.featuredImage ? post.featuredImage.url : '');
  const authorAvatar = post.author?.avatarUrl || (typeof post.author?.avatar === 'object' && post.author?.avatar ? post.author.avatar.url : '/satsu-co-founder.png');

  return (
    <div>
      <DivideX />
      <Container className="border-divide border-x px-8 pt-10 md:pt-20 md:pb-10">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={post.title}
            className="rouned-full mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
          />
        )}

        <div className="mx-auto mb-8 max-w-2xl">
          <h1 className="text-primary mb-4 text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-neutral-400">
            <img
              src={authorAvatar}
              alt={post.author?.name || 'Author'}
              className="size-10 rounded-full"
            />
            <div>
              <p className="font-medium">{post.author?.name}</p>
              <p>
                {new Date(post.publishedDate).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-base dark:prose-invert mx-auto">
          {/* Render Lexical content */}
          {post.content && (
            <RichText data={post.content} />
          )}
        </div>
      </Container>
      <DivideX />
    </div>
  );
}
