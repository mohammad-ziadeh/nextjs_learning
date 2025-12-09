
export default async function UserDetails({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  return (
    <div>this page is for user {id}</div>
  )
}
