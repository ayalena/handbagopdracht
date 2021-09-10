function Tile({ image, imageTitle, title, textOne, textTwo }) {
    return (
        <section>
            <img src={image} alt={imageTitle}/>
            <h2>
                {title}
            </h2>
            <p>
                {textOne}
            </p>
            <p>
                {textTwo}
            </p>
        </section>
    )
}

export default Tile;