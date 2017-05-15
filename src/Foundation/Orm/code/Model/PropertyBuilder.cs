using System;
using System.Linq.Expressions;
using System.Web;
using Glass.Mapper.Sc;

namespace Sitecore.Foundation.Orm.Model
{
    public class PropertyBuilder : IPropertyBuilder
    {
        private readonly IGlassHtml _glassHtml;

        public PropertyBuilder(IGlassHtml glassHtml)
        {
            _glassHtml = glassHtml;
        }

        public HtmlString BuildHtmlString<TModel>(TModel contentItem, Expression<Func<TModel, object>> field) where TModel : IContentBase
        {
            var newString = _glassHtml.Editable(contentItem, field);
            return new HtmlString(newString);
        }

        public HtmlString BuildHtmlString<TModel>(TModel contentItem, Expression<Func<TModel, object>> field, object parameters) where TModel : IContentBase
        {
            var newString = _glassHtml.Editable(contentItem, field, parameters);
            return new HtmlString(newString);
        }

        public HtmlString BuildImage<TModel>(TModel contentItem, Expression<Func<TModel, object>> field) where TModel : IContentBase
        {
            var newString = _glassHtml.RenderImage(contentItem, field);
            return new HtmlString(newString);
        }

        public HtmlString BuildImage<TModel>(TModel contentItem, Expression<Func<TModel, object>> field, object parameters) where TModel : IContentBase
        {
            var newString = _glassHtml.RenderImage(contentItem, field, parameters);
            return new HtmlString(newString);
        }

        public HtmlString BuildLink<TModel>(TModel contentItem, Expression<Func<TModel, object>> field) where TModel : IContentBase
        {
            var newString = _glassHtml.RenderLink(contentItem, field);
            return new HtmlString(newString);
        }

        public HtmlString BuildLink<TModel>(TModel contentItem, Expression<Func<TModel, object>> field, object parameters) where TModel : IContentBase
        {
            var newString = _glassHtml.RenderLink(contentItem, field, parameters);
            return new HtmlString(newString);
        }
    }
}