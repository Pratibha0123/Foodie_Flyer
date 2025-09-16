// --- Assets ---
import basket_icon from './basket_icon.png'
import logo from './logos.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './Menu/menu_1.png'
import menu_2 from './Menu/menu_2.png'
import menu_3 from './Menu/menu_3.png'
import menu_4 from './Menu/menu_4.png'
import menu_5 from './Menu/menu_5.png'
import menu_6 from './Menu/menu_6.png'
import menu_7 from './Menu/menu_7.png'
import menu_8 from './Menu/menu_8.png'

// --- Deserts ---
import Deserts_1 from './Deserts/food_10.png'
import Deserts_2 from './Deserts/food_11.png'
import Deserts_3 from './Deserts/food_12.png'
import Deserts_4 from './Deserts/food_9.png'
import Deserts_5 from './Deserts/food_1.jpeg'
import Deserts_6 from './Deserts/food_2.jpeg'
import Deserts_7 from './Deserts/food_3.png'
import Deserts_8 from './Deserts/food_4.jpeg'
import Deserts_9 from './Deserts/food_5.jpeg'
import Deserts_10 from './Deserts/food_6.jpeg'
import Deserts_11 from './Deserts/food_7.png'




// --- Noodles ---
import Noodles_1 from './Noodles/food_1.png'
import Noodles_2 from './Noodles/food_2.png'
import Noodles_3 from './Noodles/food_3.png'
import Noodles_4 from './Noodles/food_4.png'
import Noodles_5 from './Noodles/food_5.png'
import Noodles_6 from './Noodles/food_6.png'
import Noodles_7 from './Noodles/food_7.png'
import Noodles_8 from './Noodles/food_8.png'
import Noodles_9 from './Noodles/food_9.png'
import Noodles_10 from './Noodles/food_10.png'

// --- Pasta ---
import Pasta_1 from './Pasta/food_1.png'
import Pasta_2 from './Pasta/food_2.png'
import Pasta_3 from './Pasta/food_3.png'
import Pasta_4 from './Pasta/food_4.png'
import Pasta_5 from './Pasta/food_5.png'
import Pasta_6 from './Pasta/food_6.png'
import Pasta_7 from './Pasta/food_7.png'
import Pasta_8 from './Pasta/food_8.png'
import Pasta_9 from './Pasta/food_9.png'
import Pasta_10 from './Pasta/food_10.png'

// --- Cake ---
import Cake_1 from './Cake/food_1.png'
import Cake_2 from './Cake/food_2.png'
import Cake_3 from './Cake/food_3.png'
import Cake_4 from './Cake/food_4.png'
import Cake_5 from './Cake/food_5.png'
import Cake_6 from './Cake/food_6.png'
import Cake_7 from './Cake/food_7.png'
import Cake_8 from './Cake/food_8.png'
import Cake_9 from './Cake/food_9.png'

// --- Salad ---
import Salad_1 from './Salad/food_1.png'
import Salad_2 from './Salad/food_2.png'
import Salad_3 from './Salad/food_3.png'
import Salad_4 from './Salad/food_4.png'

// --- Sandwich ---
import Sandwich_1 from './Sandwich/food_1.png'
import Sandwich_2 from './Sandwich/food_2.png'
import Sandwich_3 from './Sandwich/food_3.png'
import Sandwich_4 from './Sandwich/food_4.png'

// --- Rolls ---
import Rolls_1 from './Rolls/food_5.png'
import Rolls_2 from './Rolls/food_6.png'
import Rolls_3 from './Rolls/food_7.png'
import Rolls_4 from './Rolls/food_8.png'

// --- Pure Veg ---
import PureVeg_1 from './Pure Veg/food_1.png'
import PureVeg_2 from './Pure Veg/food_2.png'
import PureVeg_3 from './Pure Veg/food_3.png'
import PureVeg_4 from './Pure Veg/food_4.png'

// --- Indian ---
import ind_1 from './indian food/food_1.png';
import ind_2 from './indian food/food_2.png'
import ind_3 from './indian food/food_3.png'
import ind_4 from './indian food/food_4.png'
import ind_5 from './indian food/food_5.png'
import ind_6 from './indian food/food_6.png'
import ind_7 from './indian food/food_7.png'

// --- Icons ---
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

// --- Assets Object ---
export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

// --- Menu Categories ---
export const menu_list = [
    { menu_name: "Indian", menu_image: ind_1 },
    { menu_name: "Salad", menu_image: menu_1 },
    { menu_name: "Rolls", menu_image: menu_2 },
    { menu_name: "Deserts", menu_image: menu_3 },
    { menu_name: "Sandwich", menu_image: menu_4 },
    { menu_name: "Cake", menu_image: menu_5 },
    { menu_name: "Pure Veg", menu_image: menu_6 },
    { menu_name: "Pasta", menu_image: menu_7 },
    { menu_name: "Noodles", menu_image: menu_8 }
]

// --- Food List with Category Pricing ---
export const food_list = [
    // Indian (₹120–₹200)
    { id: "101", name: "Chicken Tikka", image: ind_1, price: 180, description: "Tender chicken marinated in spices and grilled to perfection.", category: "Indian" },
    { id: "102", name: "Corn & Cheese Balls", image: ind_2, price: 150, description: "Golden crispy balls filled with sweet corn and melted cheese.", category: "Indian" },
    { id: "103", name: "Fish Amritsari", image: ind_3, price: 200, description: "Crispy fried fish with traditional Punjabi spices.", category: "Indian" },
    { id: "104", name: "Hara Bhara Kebab", image: ind_4, price: 160, description: "Spinach and veggie patties, healthy and flavorful.", category: "Indian" },
    { id: "105", name: "Mini Samosas", image: ind_5, price: 120, description: "Crispy pastry stuffed with spiced potatoes and peas.", category: "Indian" },
    { id: "106", name: "Veg Seekh Kebab", image: ind_6, price: 140, description: "Grilled skewers of spiced minced vegetables.", category: "Indian" },
    { id: "107", name: "Paneer Tikka", image: ind_7, price: 170, description: "Soft paneer cubes marinated in spices and grilled.", category: "Indian" },

    // Salad (₹120–₹240)
    { id: "201", name: "Greek Salad", image: Salad_1, price: 140, description: "Fresh cucumber, tomato, olives, and feta cheese.", category: "Salad" },
    { id: "202", name: "Veg Salad", image: Salad_2, price: 180, description: "A mix of fresh vegetables with light dressing.", category: "Salad" },
    { id: "203", name: "Clover Salad", image: Salad_3, price: 160, description: "Healthy greens with seeds and vinaigrette.", category: "Salad" },
    { id: "204", name: "Chicken Salad", image: Salad_4, price: 240, description: "Grilled chicken pieces on fresh salad greens.", category: "Salad" },

    // Rolls (₹120–₹200)
    { id: "301", name: "Lasagna Rolls", image: Rolls_1, price: 160, description: "Pasta sheets rolled with rich cheese and tomato sauce.", category: "Rolls" },
    { id: "302", name: "Peri Peri Rolls", image: Rolls_2, price: 140, description: "Spicy peri peri flavored rolled wraps.", category: "Rolls" },
    { id: "303", name: "Chicken Rolls", image: Rolls_3, price: 200, description: "Soft rolls filled with spicy chicken.", category: "Rolls" },
    { id: "304", name: "Veg Rolls", image: Rolls_4, price: 150, description: "Fresh veggies wrapped in soft rolls.", category: "Rolls" },

    // Deserts (₹120–₹220)
    { id: "401", name: "Barfi", image: Deserts_5, price: 180, description: "Delicious Indian sweet made with condensed milk and flavored with cardamom.", category: "Deserts" },
    { id: "402", name: "Gajar ka Halwa", image: Deserts_6, price: 200, description: "Classic carrot-based dessert slow-cooked with milk, ghee, and dry fruits.", category: "Deserts" },
    { id: "403", name: "Gulab Jamun", image: Deserts_7, price: 150, description: "Soft, spongy dumplings soaked in fragrant sugar syrup.", category: "Deserts" },
    { id: "404", name: "Jalebi", image: Deserts_8, price: 120, description: "Crispy, golden spirals dipped in saffron-flavored sugar syrup.", category: "Deserts" },
    { id: "405", name: "Kulfi", image: Deserts_9, price: 170, description: "Traditional frozen Indian dessert made with thickened milk and nuts.", category: "Deserts" },
    { id: "406", name: "Ladoo", image: Deserts_10, price: 130, description: "Round-shaped sweet balls made with flour, ghee, and sugar.", category: "Deserts" },
    { id: "407", name: "Rasmalai", image: Deserts_11, price: 220, description: "Soft paneer patties soaked in rich saffron and cardamom milk.", category: "Deserts" },
    { id: "408", name: "Ripple Ice Cream", image: Deserts_1, price: 140, description: "Creamy vanilla ice cream swirled with chocolate ripple.", category: "Deserts" },
    { id: "409", name: "Fruit Ice Cream", image: Deserts_2, price: 220, description: "Refreshing ice cream blended with real mixed fruits.", category: "Deserts" },
    { id: "410", name: "Jar Ice Cream", image: Deserts_3, price: 190, description: "Ice cream served in a jar with toppings and layers of flavor.", category: "Deserts" },
    { id: "411", name: "Vanilla Ice Cream", image: Deserts_4, price: 120, description: "Classic creamy vanilla-flavored ice cream.", category: "Deserts" },
    // Sandwich (₹120–₹240)
    { id: "501", name: "Chicken Sandwich", image: Sandwich_1, price: 160, description: "Grilled chicken with fresh veggies in bread.", category: "Sandwich" },
    { id: "502", name: "Vegan Sandwich", image: Sandwich_2, price: 180, description: "Healthy sandwich with fresh vegetables.", category: "Sandwich" },
    { id: "503", name: "Grilled Sandwich", image: Sandwich_3, price: 200, description: "Toasted sandwich with cheese and veggies.", category: "Sandwich" },
    { id: "504", name: "Bread Sandwich", image: Sandwich_4, price: 240, description: "Classic sandwich with layered fillings.", category: "Sandwich" },

    // Cake (₹120–₹220)
    { id: "601", name: "Chocolate Cake", image: Cake_1, price: 180, description: "Rich chocolate cake with smooth frosting.", category: "Cake" },
    { id: "602", name: "Vegan Cake", image: Cake_2, price: 150, description: "Delicious cake made without dairy or eggs.", category: "Cake" },
    { id: "603", name: "Butterscotch Cake", image: Cake_3, price: 200, description: "Sweet butterscotch flavor with soft layers.", category: "Cake" },
    { id: "604", name: "Sliced Cake", image: Cake_4, price: 160, description: "Perfectly sliced cake for individual servings.", category: "Cake" },
    { id: "605", name: "Fruit Cake", image: Cake_5, price: 180, description: "Moist cake with mixed dried fruits.", category: "Cake" },
    { id: "606", name: "Cheesecake", image: Cake_6, price: 220, description: "Creamy cheesecake with a buttery crust.", category: "Cake" },
    { id: "607", name: "Red Velvet Cake", image: Cake_7, price: 200, description: "Classic red velvet cake with cream cheese frosting.", category: "Cake" },
    { id: "608", name: "Black Forest Cake", image: Cake_8, price: 210, description: "Chocolate sponge layered with cherries & cream.", category: "Cake" },
    { id: "609", name: "Pineapple Cake", image: Cake_9, price: 190, description: "Light sponge cake with pineapple cream.", category: "Cake" },

    // Pure Veg (₹140–₹220)
    { id: "701", name: "Garlic Mushroom", image: PureVeg_1, price: 140, description: "Sautéed mushrooms with garlic and herbs.", category: "Pure Veg" },
    { id: "702", name: "Fried Cauliflower", image: PureVeg_2, price: 180, description: "Crispy fried cauliflower florets.", category: "Pure Veg" },
    { id: "703", name: "Mix Veg Pulao", image: PureVeg_3, price: 200, description: "Flavorful rice with mixed vegetables.", category: "Pure Veg" },
    { id: "704", name: "Rice Zucchini", image: PureVeg_4, price: 160, description: "Healthy rice dish with zucchini and spices.", category: "Pure Veg" },

    // Pasta (₹120–₹240)
    { id: "801", name: "Cheese Pasta", image: Pasta_1, price: 140, description: "Creamy pasta loaded with cheese.", category: "Pasta" },
    { id: "802", name: "Tomato Pasta", image: Pasta_2, price: 160, description: "Pasta in fresh tomato sauce.", category: "Pasta" },
    { id: "803", name: "Creamy Pasta", image: Pasta_3, price: 180, description: "Rich and creamy pasta delight.", category: "Pasta" },
    { id: "804", name: "Chicken Pasta", image: Pasta_4, price: 240, description: "Pasta tossed with grilled chicken and sauce.", category: "Pasta" },
    { id: "805", name: "Mix Veg Pasta", image: Pasta_5, price: 200, description: "Pasta with fresh mixed vegetables.", category: "Pasta" },
    { id: "806", name: "Classic Alfredo Pasta", image: Pasta_10, price: 220, description: "Creamy Alfredo pasta with parmesan.", category: "Pasta" },
    { id: "807", name: "Desi Masala Pasta", image: Pasta_6, price: 210, description: "Spicy Indian masala flavored pasta.", category: "Pasta" },
    { id: "808", name: "Paneer Tikka Pasta", image: Pasta_7, price: 230, description: "Pasta topped with grilled paneer tikka.", category: "Pasta" },
    { id: "809", name: "Pesto Basil Pasta", image: Pasta_8, price: 220, description: "Pasta tossed with fresh basil pesto.", category: "Pasta" },
    { id: "810", name: "Spicy Arrabbiata Pasta", image: Pasta_9, price: 200, description: "Pasta in spicy tomato Arrabbiata sauce.", category: "Pasta" },

    // Noodles (₹120–₹200)
    { id: "901", name: "Butter Chicken Noodles", image: Noodles_1, price: 180, description: "Soft noodles tossed in butter chicken gravy.", category: "Noodles" },
    { id: "902", name: "Veg Noodles", image: Noodles_2, price: 140, description: "Stir-fried noodles with fresh vegetables.", category: "Noodles" },
    { id: "903", name: "Pad Thai Noodles", image: Noodles_3, price: 200, description: "Thai-style noodles with peanuts and lime.", category: "Noodles" },
    { id: "904", name: "Ramen Bowl", image: Noodles_4, price: 200, description: "Japanese ramen noodles with rich broth.", category: "Noodles" },
    { id: "905", name: "Schezwan Noodles", image: Noodles_5, price: 160, description: "Spicy Chinese-style Schezwan noodles.", category: "Noodles" },
    { id: "906", name: "Singapore Noodles", image: Noodles_6, price: 150, description: "Lightly spiced noodles with veggies and sauces.", category: "Noodles" },
    { id: "907", name: "Hakka Noodles", image: Noodles_7, price: 170, description: "Classic Indian-Chinese style hakka noodles.", category: "Noodles" },
    { id: "908", name: "Egg Noodles", image: Noodles_8, price: 180, description: "Stir-fried noodles with egg and sauces.", category: "Noodles" },
    { id: "909", name: "Garlic Noodles", image: Noodles_9, price: 160, description: "Noodles with garlic butter and herbs.", category: "Noodles" },
    { id: "910", name: "Chili Garlic Noodles", image: Noodles_10, price: 200, description: "Spicy noodles tossed with chili and garlic.", category: "Noodles" }
]