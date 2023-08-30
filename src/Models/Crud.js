class Crud {
  constructor(model) {
    this.model = model;
  }

  create(obj) {
    return this.model.create(obj);
  }

  readAll() {
    return this.model.findAll();
  }

  readByAttribute(attribute) {
    return this.model.findAll({ where: { attribute } });
  }

  readById(id) {
    return this.model.findByPk(id);
  }

  update(id, obj) {
    return this.model.update(obj, { where: { id } });
  }

  delete(id) {
    return this.model.destroy({ where: { id } });
  }
}
module.exports = Crud;
