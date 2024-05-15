// ./app/detail/[id]/page.tsx

interface DetailProps {
  params: { id: string };
}
function Detail({ params }: DetailProps) {
  return (
    <div>
      <h1>Movie ID: {params.id}</h1>
      {/* ID에 따른 정보 렌더링 */}
    </div>
  );
}

export default Detail;
