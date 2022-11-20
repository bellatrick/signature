import { ProductsCarousel } from "components/Product/Products/ProductsCarousel";
import { SectionTitle } from "components/shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import productData from "data/product/product";

export const Trending = () => {
  const trendingProducts = [...productData];
  const [products, setProducts] = useState(trendingProducts);
  const [filterItem, setFilterItem] = useState("1");

  useEffect(() => {
    const newItems = trendingProducts.filter((pd) =>
      pd.filterItems.includes(filterItem)
    );
    setProducts(newItems);
  }, [filterItem]);

  const filterList = [
    {
      name: "Mild scents",
      value: "1",
    },
    {
      name: "Feminine scents",
      value: "2",
    },
    {
      name: "Masculine scents",
      value: "3",
    },
    {
      name: "Musky scents",
      value: "4",
    },
    {
      name: "Woody scents",
      value: "5",
    },
    {
      name: "Fruity scents",
      value: "6",
    },
  ];
  return (
    <>
      {/* <!-- BEGIN TRENDING --> */}
      <section className="trending">
        <div className="trending-content">
          <SectionTitle
            subTitle="Fragrances"
            title="Popular signatures"
            body="These are top rated scents that can be swapped for other fragrances and customized to your preferences"
          />
          <div className="tab-wrap trending-tabs">
            <ul className="nav-tab-list tabs">
              {filterList.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.value)}
                  className={item.value === filterItem ? "active" : ""}
                >
                  {item.name}
                </li>
              ))}
            </ul>
            <div className="products-items">
              <ProductsCarousel products={products} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TRENDING EOF   --> */}
    </>
  );
};
