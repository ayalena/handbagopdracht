function Product({ span, image, title, product, price }) {
    return (
        <article>
        <span>
                {span}
            </span>
            <img src={image} alt={title}/>
            <p>
                {product}
            </p>
            <h4>
                {price}
            </h4>
        </article>
    )
}

export default Product;