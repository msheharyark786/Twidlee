class Meal {
  constructor( 
    id,
    categoryIds,
    offerId,
    title,
    persons,
    imageUrl,
    price,
    dealDetail,
    // steps,
    // isGlutenFree,
    // isVegan,
    // isVegetarian,
    // isLactoseFree
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.offerId=offerId
    this.title = title;
    this.imageUrl = imageUrl;
    this.dealDetail = dealDetail;
    //this.steps = steps;
    this.price = price;
    this.persons = persons;
    //this.isGlutenFree = isGlutenFree;
    //this.isVegan = isVegan;
    //this.isVegetarian = isVegetarian;
   // this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
