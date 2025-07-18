export default async function ProductDetail({ params }: { params: Promise<{productId: string}>}) {
    const { productId } = await params
    return <h1>Product {productId}</h1>
}