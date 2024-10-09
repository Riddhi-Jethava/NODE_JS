const categorySchema = require("../model/categorySchema")

module.exports.addCategory = (req, res) => {
    res.render("./category/addCategory")
}

module.exports.addCategoryPost = async (req,res) => {
    if(req.file){
        req.body.categoryImage = req.file.path;
    }
    
    const isAdd = await categorySchema.create(req.body);
    isAdd ? res.redirect('/category/viewCategory') : console.log("Error while Category Adding")
}

module.exports.viewCategory = async (req,res)=>{
    const data = await categorySchema.find({})
    res.render('./category/viewCategory', {data})
}

module.exports.deleteCategory = async (req,res)=>{
    const isdelete = await categorySchema.findByIdAndDelete(req.query.id)
    isdelete ? res.redirect('/category/viewCategory') : console.log("Error While deleting category");
}

module.exports.editCategory = async (req,res)=>{
    const data = await categorySchema.findById(req.query.id)
    data ? res.render('category/editCategory', {data}) : console.log('Error While editing category');
}

module.exports.updateCategory = async (req,res)=>{
    const isUpdate = await categorySchema.findByIdAndUpdate(req.query.id, req.body)
    isUpdate ? res.redirect('/category/viewCategory') : console.log("Error While updating category");
}

// riddhiieee080307010