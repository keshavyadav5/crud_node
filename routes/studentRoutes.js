const express = require('express');
const router = express.Router();
const Student = require('../modules/student');

router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const response = await newStudent.save();

    console.log('Data uploaded successfully');
    res.status(201).json({ response });
  } catch (error) {
    console.error("Error uploading data", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await Student.find();
    console.log("Data fetched successfully");
    res.status(200).json({ data });
  } catch (error) {
    console.error("Error uploading data", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
router.get('/:course', async (req, res) => {
  try {
    const course = req.params.course;
    if (course == 'math' || course == "science" || course == "english") {
      const response = await Student.find({ course })
      console.log("Data fetched successfully");
      res.status(200).json({ response })
    } else {
      res.status(404).json({ error: "Invalid work type" })
    }
  } catch (error) {
    console.log('Error to fetch data');
    res.status(500).json({ error })
  }
})

//update
router.put('/:id',async (req,res) =>{
  try {
    const data = req.params.id;
    const fetch = req.body;
    const response = await Student.findByIdAndUpdate(data,fetch,{new:true})
    console.log('Data updated successfully');
    res.status(200).json({ response });
  } catch (error) {
    console.log('Error to fetch data');
    res.status(500).json({ error })
  }
})

//delete
router.delete('/:id',async (req,res)=>{
  try {
    const data = req.params.id;
    const response = await Student.findByIdAndDelete(data)
    if (!response) {
      console.log(`Menu item not found with ID: ${data}`);
      return res.status(404).json({ message: "Menu item not found" });
    }
    console.log("Data deleted successfully");
    res.status(201).json({response})
  } catch (error) {
    console.log('Error to fetch data');
    res.status(500).json({ error })
  }
})

module.exports = router;
