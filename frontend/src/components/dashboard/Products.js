import { useState, useEffect } from "react";

function DashboardProducts() {
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [countCategory, setCountByCategory] = useState([]);
  const [categoryBoard, setCategoryBoard] = useState([]);
  const [ultimoproducto, setUltimoProducto] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/productos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setProductsList(data.products);
        setCountByCategory(data.countByCategory);
        setCategoryBoard(data.countByCategory.data);
        setUltimoProducto(data.products[data.count - 1]);
      });
  }, []);

  useEffect(() => {
    console.log("Se actualizó el componente");
  }, [products, productsList, countCategory, categoryBoard, ultimoproducto]);

  return (
    <main>
      <div className="together">
        <div className="TotalP">
          <h3>Total de productos</h3>
          <p>{products.count}</p>
        </div>
        <div className="TotalC">
          <h3>Total de categorías</h3>
          <p>{countCategory.totalCategories}</p>
        </div>
      </div>
      <div className="lastProduct">
        <h3>Último producto creado</h3>
        <div className="white">
          <p>
            <strong>Nombre:</strong> {ultimoproducto.name}
          </p>
        </div>
        <div className="white">
          <p>
            <strong>Precio:</strong> ${ultimoproducto.price} MXN
          </p>
        </div>
        <div className="white">
          <p>
            <strong>Detalle:</strong>{" "}
            <a href={ultimoproducto.detail}>{ultimoproducto.detail}</a>
          </p>
        </div>
      </div>

      <div className="categories">
        <h3>Categorías</h3>
        <div className="line"></div>
        <div>
          <table>
            <tr>
              <th>Categorías</th>
              {categoryBoard.map((category, i) => {
                return <td key={i}>{category.category_name}</td>;
              })}
            </tr>
            <div className="line"></div>
            <tr>
              <th>Número de productos</th>
              {categoryBoard.map((category, i) => {
                return <td key={i}>{category.total_products}</td>;
              })}
            </tr>
          </table>
          {/* <h4>{category.category_name}  Productos:{category.total_products}</h4>
                        
                        <div className="line"></div> */}
        </div>
      </div>

      <div className="Pdisp">
        <h3>Productos disponibles</h3>
        <div className="line"></div>
        <table>
          {productsList.map((producto, i) => {
            return (
              <tr key={i}>
                <h4>{producto.name} </h4>
                <div className="line"></div>
              </tr>
            );
          })}
        </table>
      </div>
    </main>
  );
}

export default DashboardProducts;
