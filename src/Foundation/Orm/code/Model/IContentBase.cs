using System;

namespace Sitecore.Foundation.Orm.Model
{
    public interface IContentBase
    {
        Guid Id { get; }

        string Name { get; }

        string DisplayName { get; }

        string Path { get; }

        string Url { get; set; }

        string FullPath { get; }

        string TemplateName { get; }

        Guid TemplateId { get; }

        int Sortorder { get; }
    }
}