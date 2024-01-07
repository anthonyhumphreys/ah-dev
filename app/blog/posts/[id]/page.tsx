import Date from '@/components/Date';

import { getAllPostIds, getPostData } from '@/utils/posts';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

export async function generateMetadata({ params }: Props) {
  console.log('generateMetadata', params);
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

// -< Post >-
export default async function Post({ params }: Props) {
  console.log('params', params);
  const postData: PostData = await getPostData(params.id);

  return (
    <>
      {/* Post Title */}
      <h1 className="font-extrabold text-3xl mb-1">{postData.title}</h1>

      <div className="text-gray-500 font-medium mb-5">
        <Date dateString={postData.date} />
      </div>

      {/* Post Content */}
      <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}
