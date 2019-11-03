using System;
using System.Collections.Generic;

namespace Docs.Contracts
{
    public interface IDocumentOperat
    {
        IEnumerable<Document> GetDocumentList();
    }

    public class Document
    {
        public Document()
        {

        }
        public string Id { get; set; }
        public string Name { get; set; }
        public DocumentType LibType { get; set; }
        public string Created { get; set; }
        public string CreatedBy { get; set; }
        public string Modified { get; set; }
        public string ModifiedBy { get; set; }
    }

    public enum DocumentType
    {
        MsWord = 0,
        MsExcel,
        MsPowerPoint,
        AdobePdf,
        Others
    }
}
