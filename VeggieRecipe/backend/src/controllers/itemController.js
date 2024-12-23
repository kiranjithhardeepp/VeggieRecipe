const Recipe= require("../model/recipeModel")

const getAllItems = async(req,res) => {
      const result = await Recipe.find().sort({createdAt: -1});
      res.status(200).json(result);
}

const getSearchedItems = async(req,res) => {
    const { q } = req.query;
    console.log(q);
    try{
        let recipes;
        if(q){
            recipes = await Recipe.find({ name:{$regex: q, $options:'i'}})
        }
       res.json(recipes);
    }catch(error) {
        res.status(500).json({message: "No items found"})
    }
}

const getSingleItem = async(req,res) => {
    const { id } = req.params;
    try{
        const Recipe = await Recipe.findById(id);
        res.json(Recipe);
    }catch(error) {
        res.status(500).json({message: "No items found"})
    }
}

module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItem
}