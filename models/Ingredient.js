const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const init = {
    type: Number,
    default: 0
}

const obj = {};

const ingredientTags = ['bay leaves', 'cayenne pepper', 'crushed red pepper', 'cumin', 
  'coriander', 'oregano', 'paprika', 'rosemary', 'thyme leaves', 'cinnamon', 'cloves', 
  'allspice', 'ginger', 'nutmeg', 'anise', 'caraway', 'cardamom', 'celery seed', 'chiles', 
  'dill', 'fennel', 'mustard seed', 'peppercorn', 'saffron', 'turmeric', 'vanilla', 'salt', 
  'pepper', 'garlic powder', 'onion powder', 'olive oil', 'canola oil', 'grapeseed oil', 
  'peanut oil', 'vegetable oil', 'oil', 'celery', 'garlic', 'butter', 
  'milk', 'cream', 'heavy cream', 'mushroom', 'truffle', 'tomato', 'tomatillo', 'tomato sauce', 
  'crushed tomatoes', 'worcestershire sauce', 'chili powder', 'red wine', 'white wine', 
  'red wine vinegar', 'white wine vinegar', 'balsalmic vinegar', 'apple cider vinegar', 'sugar', 
  'black pepper', 'white pepper', 'sweet pea', 'peas', 'snow peas', 'sugar snap peas', 
  'frozen peas', 'parsley', 'cilantro', 'chives', 'scallions', 'turnips', 'egg', 'eggwhites', 
  'baking soda', 'baking powder', 'bread crumbs', 'panko bread crumbs', 'flour', 'almond flour', 
  'sweet potato', 'potato', 'kale', 'shallot', 'cranberries', 'almonds', 'peanuts', 'walnuts', 
  'cashews', 'herb de provence', 'non-dairy butter', 'caster sugar', 'rice flour', 'zucchini', 
  'castor oil', 'non-dairy milk', 'red bell peppers', 'green bell peppers', 'onions', 'vegan cheese', 
  'vegan parmesan', 'mozzarella cheese', 'romano cheese', 'brie', 'parmesan cheese', 
  'american cheese', 'cheddar cheese', 'chicken', 'beef', 'pork', 'fish', 'broccoli', 'cucumber', 
  'soy milk', 'almond milk', 'condensed milk', 'evaporated milk', 'cheese', 'garbanzo beans', 
  'kidney beans', 'green beans', 'avocado oil', 'avocado', 'salsa', 'bread', 'whole wheat bread', 
  'microgreens', 'beans', 'asparagus', 'bell peppers', 'beets', 'winter squash', 'tomatoes', 
  'canned tomatoes', 'sweet potatoes', 'spinach', 'salad greens', 'rhubarb', 'radishes', 'pumpkin', 
  'potatoes', 'parsnips', 'sacllions', 'brussels sprouts', 'mushrooms', 'mixed vegetables', 'leeks', 
  'greens', 'green chilies', 'eggplant', 'corn', 'cauliflower', 'carrots', 'cabbage', 'bok choi', 
  'turkey', 'tofu', 'refried beans', 'lentils', 'salmon', 'lamb', 'shrimp', 'crab', 'lobster', 
  'sour cream', 'yogurt', 'greek yogurt', 'ricotta cheese', 'cottage cheese', 'buttermilk', 'barley', 
  'bulgur', 'couscous', 'cornmeal', 'noodles', 'oats', 'pasta', 'quinoa', 'rice', 'tortillas', 
  'mayonnaise', 'chicken broth', 'vegetable stock', 'beef stock', 'açaí', 'apple', 'apricot', 'banana', 
  'bilberry', 'blackberry', 'black currant', 'blueberry', 'boysenberry', 'breadfruit', 'cactus pear', 
  'canteloupe', 'honeydew', 'currant', 'cherry', 'coconut', 'damson', 'date', 'dragonfruit', 
  'durian', 'elderberry', 'feijoa', 'fig', 'goji berry', 'gooseberry', 'grape', 'raisin', 'grapefruit', 
  'guava', 'honeyberry', 'huckleberry', 'jackfruit', 'jambul', 'japanese plum', 'juniper berry', 
  'horned melon', 'kiwifruit', 'kumquat', 'lemon', 'lime', 'loganberry', 'loquat', 'lychee', 'mango', 
  'melon', 'cantaloupe', 'galia melon', 'watermelon', 'mulberry', 'nectarine', 'orange', 'blood orange', 
  'clementine', 'mandarine', 'tangerine', 'papaya', 'passionfruit', 'peach', 'pear', 'persimmon', 'plantain', 
  'plum', 'prune,', 'pineapple', 'pluot', 'pomegranate', 'pomelo', 'quince', 'raspberry', 'rambutan', 
  'red currant', 'starfruit', 'strawberry', 'tamarind', 'tangelo', 'tangarine', 'white currant', 'white sapote', 
  'yuzu', 'pizza dough', 'barbeque sauce', 'ketchup', 'mustard', 'sriracha']

ingredientTags.sort().forEach(tag => obj[tag] = init)

const ingredientSchema = new Schema(obj)

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;