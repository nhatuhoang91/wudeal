export enum CategoryGroup {
    AUTO = 'Auto',
    BABIES_AND_KIDS = 'Babies & Kids',
    BAGS_AND_LUGGAGE = 'Bags & Luggage',
    CLOTHING_AND_ACCESSORIES = 'Clothing & Accessories',
    COMPUTERS = 'Computers',
    GROCERY = 'Grocery',
    HEALTH = 'Health',
    BEAUTY = 'Beauty',
    HOME_IMPROVEMENT = 'Home Improvement',
    OFFICE = 'Office',
    PETS = 'Pets',
    SHOES = 'Shoes',
    SPORTING_GOODS = 'Sporting Goods',
    TECH_AND_ELECTRONICS = 'Tech & Electronics'
}
export const categoryList : string[] = ['Auto',
'Babies & Kids',
'Bags & Luggage',
'Clothing & Accessories',
'Computers',
'Grocery',
'Health',
'Beauty',
'Home Improvement',
'Office',
'Pets',
'Shoes',
'Sporting Goods',
'Tech & Electronics']
export enum BabiesKidsSubGroup {
    BABIES = 'Babies',
    KIDS = 'Kids'
}
export enum ClothingAccessoriesSubGroup {
    BABIES_AND_KIDS_CLOTHES_ACCESSORES = 'Babies & Kids Clothes And Accessories',
    JEWELRY = 'Jewelry',
    MEN_CLOTHING_ACCESSORIES = 'Men\'s Clothing & Accessories',
    SUNGLASSES = 'Sunglasses',
    WOMEN_CLOTHING_ACCESSORIES = 'Women\'s Clothing & Accessories'
}
export enum ComputersSubGroups {
    COMPUTER_ACCESSORIES = 'Computer Accessories',
    COMPUTER_PARTS = 'Computer Parts',
}
export enum HomeImprovementSubGroup {
    BED_AND_BATH = 'Bed & Bath',
    FURNITURE = 'Furniture',
    GARDENING_AND_OUTDOOR = 'Gardening & Outdoor',
    HOME_DECOR = 'Home Decor',
    APPLIANCES = 'Appliances',
    TOOLS = 'Tools'
}
export enum PetFoodsSubGroup {
    DOG_FOODS = 'Dog Foods',
    CAT_FOODS = 'Cat Foods' 
}
export enum SportingGoodsSubGroup {
    BIKE_ACCESSORIES = 'Bike Accessories',
    FITNESS_AND_WELLNESS = 'Fitness & Wellness',
    OUTDOOR = 'Outdoor'
}
export type CategorySubGroup = BabiesKidsSubGroup | 
    ClothingAccessoriesSubGroup |
    ComputersSubGroups |
    HomeImprovementSubGroup |
    PetFoodsSubGroup |
    SportingGoodsSubGroup|
    null
export type Categorytype = {
    desc : string,
    group : CategoryGroup
}

export const categories: { title: CategoryGroup; href: string }[] = [
    {
      title: CategoryGroup.AUTO,
      href: "/",
    },
    {
      title: CategoryGroup.BABIES_AND_KIDS,
      href: "/",
    },
    {
      title: CategoryGroup.BAGS_AND_LUGGAGE,
      href: "/",
    },
    {
      title: CategoryGroup.BEAUTY,
      href: "/",
    },
    {
      title: CategoryGroup.CLOTHING_AND_ACCESSORIES,
      href: "/",
    },
    {
      title: CategoryGroup.COMPUTERS,
      href: "/",
    },
    {
      title: CategoryGroup.GROCERY,
      href: "/",
    },
    {
      title: CategoryGroup.HEALTH,
      href: "/",
    },
    {
      title: CategoryGroup.HOME_IMPROVEMENT,
      href: "/",
    },
    {
      title: CategoryGroup.OFFICE,
      href: "/",
    },
  ];