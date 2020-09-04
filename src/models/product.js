class Product {
    constructor(
        id, 
        ownerId, 
        title, 
        imageUrl, 
        description, 
        price,
        size
        ) 
        {
        this.id = id;
        this.ownerId = ownerId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.size = size
    }
}

export default Product;