const router = require("express").Router();
const personModel = require("../models/Person");

//Put a NEW Person
router.post("/addPerson", async (req, res) => {
  const { name, age, email, favouriteFoods } = req.body;

  try {
    const newPerson = new personModel({ name, age, email, favouriteFoods });
    await newPerson.save();
    // console.log(newPerson);
    console.log(newPerson);
    res.status(200).json({ msg: `Person added`, newPerson });
  } catch (error) {
    console.log(error);
  }
});

//Get all Persons
router.get("/seePersons", async (req, res) => {
  try {
    const persons = await personModel.find();
    res.status(200).json(persons);
  } catch (error) {
    console.log(error);
  }
});

//Get person By Id
router.get("/seeOnePerson/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const personFound = await personModel.findById({ _id });
    res.status(200).json(personFound);
  } catch (error) {
    console.log(error);
  }
});

//Update person by Id
router.put("/:Id", async (req, res) => {
  try {
    const { Id } = req.params;
    //   const id=req.params.Id
    const personFound = await personModel.findOneAndUpdate(
      { _id: Id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "person edited", personFound });
  } catch (error) {
    res.status(500).send("impossible to edite person");
  }
});

//Delete person by Id
router.delete("/:Id", async (req, res) => {
  try {
    const { Id } = req.params;
    const personToDelete = await personModel.findByIdAndDelete(Id);
    res.status(200).send({ msg: "person deleted", personToDelete });
  } catch (error) {
    res.status(500).send("impossible to delete person");
  }
});

//Specific search for person
router.get("/seePersonsLike", async (req, res) => {
  try {
    const specificPerson = await personModel
      .find()
      .where("age")
      .gt(24)
      .limit(1);
    res.status(200).json({ msg: "found", specificPerson });
  } catch (error) {
    res.status(500).send("impossible to find that person");
  }
});
module.exports = router;
