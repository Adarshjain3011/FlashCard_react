import { data } from "autoprefixer";

async function createQuestion(req, res) {

    try {

        // Assuming req.body contains questionName, answer, option and categoryId

        const { questionName, answer, option, categoryId } = req.body;

        if (!questionName || !answer || !option || !categoryId) {

            return res.status(400).json({

                success: false,
                data: null,
                message: "All fields are required"
            })

        }

        // check given category exits or not 

        const category = await Category.findByPk(categoryId);

        if (!category) {

            return res.status(400).json({

                success: false,
                data: null,
                message: "gievn category does not exists "

            })

        }

        // Create new question with given details

        const newQuestion = await Question.create({

            questionName, answer, option, categoryId

        });


        // successfully return the response 


        return res.status(201).json({

            success: true,
            data: newQuestion,
            message: "Question created successfully"

        });


    } catch (error) {

        console.log("Error", e.message);

        return res.status(500).json({

            success: false,
            data: null,
            message: e.message
        })
    }

}




async function updateQuestion(req, res) {
    try {
        const { questionName, answer, option, questionId } = req.body;

        if (!questionId) {

            return res.status(400).json({
                success: false,
                data: null,
                message: "Question ID is not provided"
            });
        }

        // Find the question by ID
        const question = await Question.findByPk(questionId);

        if (!question) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Question does not exist"
            });
        }

        // Update the question fields if they are provided in the request body
        if (questionName !== undefined) {
            question.questionName = questionName;
        }

        if (answer !== undefined) {
            question.answer = answer;
        }

        if (option !== undefined && Array.isArray(option)) {
            // Get the current options
            let currentOptions = question.option;

            // Ensure the option array has the same length as the current options
            if (currentOptions && currentOptions.length === option.length) {
                // Update only the specified options
                option.forEach((opt, index) => {
                    if (opt !== undefined) {
                        currentOptions[index] = opt;
                    }
                });
            } else {
                // Handle cases where the option length differs
                return res.status(400).json({
                    success: false,
                    data: null,
                    message: "Option array length mismatch"
                });
            }

            // Assign the updated options back to the question
            question.option = currentOptions;
        }

        // Save the updated question to the database
        await question.save();

        // Successfully return the response
        return res.status(200).json({
            success: true,
            data: question,
            message: "Question updated successfully"
        });

    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({
            success: false,
            data: null,
            message: error.message
        });
    }
}



async function getQuestion(req, res) {
    
    try {
        
        const { questionId } = req.params;
        
        if (!questionId) {
            
            return res.status(400).json({
                
                success: false,
                data: null,
                message: "Question ID is not provided"
                
            });
        }
        
        const question = await Question.findByPk(questionId);
        
        return res.status(200).json({
            
            success: true,
            data: question,
            message: "Question fetched successfully"
            
        })
        
    } catch (erorr) {

        console.error("Error:", error.message);
        return res.status(500).json({
            success: false,
            data: null,
            message: error.message
        });
        
    }
}




async function deleteQuestion(req, res) {
    
    try {
        
        const { questionId } = req.params;
        
        if (!questionId) {
            
            return res.status(400).json({
                
                success: false,
                data: null,
                message: "Question ID is not provided"
                
            })
        }
        
        const question = await Question.findByPk(questionId);

        if (!question) {

            return res.status(404).json({

                success: false,
                data: null,
                message: "Question does not exist"
            })
        }
        await question.destroy();
        return res.status(200).json({
            
            success: true,
            data: null,
            message: "Question deleted successfully"
            
        });
        
    } catch (error) {
        
        console.error("Error:", error.message);
        return res.status(500).json({
            success: false,
            data: null,
            message: error.message
        });
    }
}



module.exports = {

    createQuestion,
    updateQuestion,
    getQuestion,
    deleteQuestion
};
