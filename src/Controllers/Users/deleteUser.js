const { Users } = require("../../db");

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userToDelete = await Users.findOne({ where: { id } });
    if (!userToDelete) throw new Error("User not found");

    await userToDelete.destroy();

    return res.status(200).json({
      message: `The user ${userToDelete.id} was deleted successfully.`,
    });
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

module.exports = deleteUser;
