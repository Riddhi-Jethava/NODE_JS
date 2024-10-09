const categorySchema = require('../model/categorySchema')
const subcategorySchema = require('../model/subCategory')

module.exports.addSubCategory = async (req,res)=>{
    const data = await categorySchema.find({})
    res.render('category/addSubCategory',{data})
}

module.exports.addSubCategoryPost = async (req,res)=>{
    console.log(req.body);
    
    const isAdd = await subcategorySchema.create(req.body)
    isAdd? res.redirect('/subcategory/viewSubCategory') : console.log("Error while Subcategory Adding");
}

module.exports.viewSubCategory = async (req,res)=>{
    const data = await subcategorySchema.find({})
    res.render('category/viewSubCategory', {data})
}

module.exports.deleteCategory = async (req,res)=>{
    const isdelete = await subcategorySchema.findByIdAndDelete(req.query.id)
    isdelete? res.redirect('back') : console.log("Data Not Delete Properly");
}

module.exports.editCategory = async (req,res)=>{
    const data = await categorySchema.find({})
    const editData = await subcategorySchema.findById(req.query.id)
    data ? res.render('category/editSubCategory',{data,editData}) : console.log("Data Not Found");
}

module.exports.updateCategory = async (req,res)=>{
    const data = await subcategorySchema.findByIdAndUpdate(req.query.id,req.body)
    console.log(data);
    data ? res.redirect('/subcategory/viewSubCategory') : console.log("Data Not Updated Properly");
}