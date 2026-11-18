Query:

use legalDB

db.legal_documents.insertMany([
  {
    title: "Property Dispute",
    Category: "civil law",
    content: "this document explains property ownership disputes"
  },
  {
    title: "Employment Agreement",
    Category: "Labour law",
    content: "this document explains employee contracts and rights"
  },
  {
    title: "Criminal case",
    Category: "Criminal Law",
    content: "this document contains information about criminal proceedings"
  }
)

db.legal_documents.createIndex({
  title: "text",
  content: "text"
})

db.legal_documents.find({
  $text: { $search: "property ownership" }
})