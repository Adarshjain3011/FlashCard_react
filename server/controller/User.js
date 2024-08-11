
 async function signup(req,res){

    try{

        console.log(req.body);

        return res.status(200).json({

            success:true,
            data:null,
            message:"User signup successful"
        })


    }catch(e){

        console.log("Error",e.message);

        return res.status(500).json({

            success:false,
            data:null,
            message:e.message
        })

    }
} 


module.exports = signup;


