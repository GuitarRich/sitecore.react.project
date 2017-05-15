namespace Sitecore.Foundation.Web.Context
{
    public interface IContentContext
    {
        string CurrentItemId { get; }

        bool IsExperienceEditor { get; }

        string DataSource { get; }

        string GetParameterValue(string key);
    }
}