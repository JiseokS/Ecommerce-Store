import getBillboards from "@/actions/get-billboard";
import Container from "../../components/ui/container";
import Billboard from "../../components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "../../components/product-list";

export const revalidate = 0;

const HomePage = async () =>{
    const products = await getProducts({isFeatured: true});
    const billboard = await getBillboards("15846b56-a55b-4f47-ab93-bfc4f36bf009");
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
    )
}

export default HomePage;