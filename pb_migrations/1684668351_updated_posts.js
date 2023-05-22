migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p3cbv2z9d2qumzw")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p3cbv2z9d2qumzw")

  collection.name = "posts"

  return dao.saveCollection(collection)
})
