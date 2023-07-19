import Head from "next/head";
import styles from "../styles/Home.module.css";
import commerce from "../lib/commerce";

export async function getStaticProps(context) {
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();

  return {
    props: { products, categories },
    revalidate: 30,
  };
}

export default function Home({ products, categories }) {
  console.log("products and categories", products, categories);
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Store</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input
          role="searchbox"
          type="text"
          title="Search"
          placeholder="Search products"
        />

        <ul aria-label="Categories">
          {categories.map((category) => {
            return (
              <li aria-label="category" key={category.id}>
                <h2 id={`category-${category.name}`}>{category.name}</h2>
                <ul area-labelledby={`category-${category.name}`}>
                  {products
                    .filter((product) =>
                      product.categories.find((c) => c.id === category.id)
                    )
                    .map((product) => {
                      return <li key={product.id}>{product.name}</li>;
                    })}
                </ul>
              </li>
            );
          })}
        </ul>

        <h2 id="all-products-heading">All products</h2>
        <ul aria-labelledby="all-products-heading">
          {products.map((product) => {
            return <li key={product.id}>{product.name}</li>;
          })}
        </ul>
      </main>

      <footer className={styles.footer}>Made by Kayano</footer>
    </div>
  );
}
