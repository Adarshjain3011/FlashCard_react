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

        // Assuming req.body contains questionName, answer, option and categoryId

        const { questionName, answer, option, questionId } = req.body;

        if (!questionId) {

            return res.status(500).json({

                success: false,
                data: null,
                message: "question id is not provided"

            })

        }

        // finc the question with this id 

        const question = await Question.findByPk(questionId);

        if (!question) {

            return res.status(400).json({
                success: false,
                data: null,
                message: "question does not exists"
            })
        }

        if (questionName !== undefined) {

            question.questionName = questionName;

        }

        if(answer !== undefined){

            question.answer = answer;

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

