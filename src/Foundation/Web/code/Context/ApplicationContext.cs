using System.Collections.Specialized;
using System.Linq;
using System.Web;
using Sitecore.Mvc.Presentation;

namespace Sitecore.Foundation.Web.Context
{
    public class ApplicationContext : IContentContext, IWebContext
    {
        public string CurrentItemId => Sitecore.Context.Item.ID.Guid.ToString();

        public bool IsExperienceEditor => Sitecore.Context.PageMode.IsExperienceEditor;

        public string DataSource => RenderingContext.Current.Rendering.DataSource;

        public string GetParameterValue(string key)
        {
            var value = string.Empty;
            var parameters = RenderingContext.Current.Rendering.Parameters;
            if (parameters != null && parameters.Any())
            {
                value = parameters[key];
            }

            return value;
        }

        public string GetQueryString(string name) => GetQueryString(name, string.Empty);

        public string GetQueryString(string name, string defaultValue)
        {
            var value = QueryString[name];
            var returnValue = defaultValue;

            if (!string.IsNullOrEmpty(value))
            {
                returnValue = value;
            }

            return returnValue;
        }

        public bool DoesQueryStringParameterExist(string name)
        {
            bool returnValue = false;

            if (!string.IsNullOrEmpty(name))
            {
                returnValue = HttpContext.Current.Request.QueryString.AllKeys.Contains(name);
            }

            return returnValue;
        }

        private NameValueCollection QueryString
        {
            get
            {
                var current = HttpContext.Current;
                var collection = new NameValueCollection();

                if (current != null)
                {
                    collection = current.Request.QueryString;
                }

                return collection;
            }
        }
    }
}