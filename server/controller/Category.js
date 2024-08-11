const Category = require('./category'); // Assuming Category model is defined in category.js

async function createCategory(req, res) {
    try {
        const { categoryName } = req.body;

        const existingCategory = await Category.findOne({ where: { categoryName } });

        if (existingCategory) {
            return res.status(409).json({
                success: false,
                message: "Category already exists",
                data: null,
            });
        }

        const newCategory = await Category.create({ categoryName });

        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: newCategory
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Error creating category",
            data: null
        });
    }
}

async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll();

        if (categories.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No categories found",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "Categories retrieved successfully",
            data: categories
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Error retrieving categories",
            data: null
        });
    }
}

async function updateCategory(req, res) {
    try {
        const { categoryId } = req.params;
        const { categoryName } = req.body;

        const category = await Category.findByPk(categoryId);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
                data: null
            });
        }

        const existingCategory = await Category.findOne({ where: { categoryName } });

        if (existingCategory && existingCategory.id !== parseInt(categoryId)) {
            return res.status(409).json({
                success: false,
                message: "Another category with this name already exists",
                data: null
            });
        }

        category.categoryName = categoryName;
        await category.save();

        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: category
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Error updating category",
            data: null
        });
    }
}

async function deleteCategory(req, res) {
    try {
        const { categoryId } = req.params;

        const category = await Category.findByPk(categoryId);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
                data: null
            });
        }

        await category.destroy();

        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            data: null
        });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            success: false,
            message: "Error deleting category",
            data: null
        });
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
};



