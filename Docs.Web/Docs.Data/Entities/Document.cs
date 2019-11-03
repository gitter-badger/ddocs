using System;
using System.Collections.Generic;
using System.Text;

namespace Docs.Data.Entities
{
    public class Document : BaseEntity
    {
        public Document()
        {

        }
        public string Name { get; set; }
        public DocumentType DocumentType { get; set; }
        public string Created { get; set; }
        public string CreatedBy { get; set; }
        public string Modified { get; set; }
        public string ModifiedBy { get; set; }
    }
}
