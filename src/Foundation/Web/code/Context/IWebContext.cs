namespace Sitecore.Foundation.Web.Context
{
    public interface IWebContext
    {
        string GetQueryString(string name);

        string GetQueryString(string name, string defaultValue);

        bool DoesQueryStringParameterExist(string name);
    }
}
