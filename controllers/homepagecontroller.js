const homepagemodel = require("../model/home_page_model.js");
const cookieParser = require('cookie-parser');
const submitButton1 = async function (req, res) {
    try {
        let text = req.body;
        let data = await homepagemodel.create(text);
        res.cookie('textSubmitted', data.text);
        return res.status(201).send({
            status: true,
            // message: "User created successfully",
            message: "text submitted Successfully",
        });
    } catch (error) {
        if (error.message.includes("validation")) {
            return res.status(400).send({ status: false, message: error.message });
        } else if (error.message.includes("duplicate")) {
            return res
                .status(400)
                .send({ status: false, message: error.message });
        } else {
            return res.status(500).send({ status: false, message: error.message });
        }
    }
};

const SearchButton = async function (req, res) {
    try {
        let text = req.body;
        let data = await homepagemodel.findOne({text:text});

        if(!data){
            return res.status(404).send({
                status: false,
                message: "text not found",
            });
        }
        return res.status(200).send({
            status: true,
            message: "text found Successfully",
            searchedText:data.text
        });
    } catch (error) {
        if (error.message.includes("validation")) {
            return res.status(400).send({ status: false, message: error.message });
        } else if (error.message.includes("duplicate")) {
            return res
                .status(400)
                .send({ status: false, message: error.message });
        } else {
            return res.status(500).send({ status: false, message: error.message });
        }
    }
};

module.exports = {
    submitButton1,
    SearchButton
};
